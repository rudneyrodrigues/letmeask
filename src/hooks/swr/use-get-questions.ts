import useSWR from 'swr'
import { useEffect } from 'react'
import { get, onValue, ref } from 'firebase/database'

import { QuestionProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

type FirebaseQuestionsProps = Record<string, Omit<QuestionProps, 'id'>>

const fetcher = async (path: string) => {
	const questionsRef = ref(realtimeDB, path)
	const snapshot = await get(questionsRef)

	if (!snapshot.exists()) return []

	const data = snapshot.val() as FirebaseQuestionsProps
	const parsedQuestions = Object.entries(data).map(([key, value]) => ({
		id: key,
		...value,
		createdAt: new Date(value.createdAt).getTime()
	}))

	// Ordenar perguntas por mais recentes
	const sortedQuestions = parsedQuestions.sort(
		(a, b) => Number(b.createdAt) - Number(a.createdAt)
	)

	// Caso a pergunta esteja respondida, ela deve ser enviada para o final da lista
	const answeredQuestions = sortedQuestions.filter(
		question => question.isAnswered
	)
	const unansweredQuestions = sortedQuestions.filter(
		question => !question.isAnswered
	)

	const orderedQuestions = [...unansweredQuestions, ...answeredQuestions]

	return orderedQuestions
}

export const useGetQuestions = (roomID: string) => {
	const path = `rooms/${roomID}/questions`
	const { data, error, isLoading, mutate } = useSWR(path, fetcher, {
		revalidateOnFocus: false // Evita novas requisições ao focar no app
	})

	useEffect(() => {
		if (!roomID) return

		const questionsRef = ref(realtimeDB, path)

		const unsubscribe = onValue(questionsRef, snapshot => {
			if (snapshot.exists()) {
				const data = snapshot.val() as FirebaseQuestionsProps

				const parsedQuestions = Object.entries(data).map(([key, value]) => ({
					id: key,
					...value,
					createdAt: new Date(value.createdAt).getTime()
				}))

				// Ordenar perguntas por mais recentes
				const sortedQuestions = parsedQuestions.sort(
					(a, b) => Number(b.createdAt) - Number(a.createdAt)
				)

				// Caso a pergunta esteja respondida, ela deve ser enviada para o final da lista
				const answeredQuestions = sortedQuestions.filter(
					question => question.isAnswered
				)
				const unansweredQuestions = sortedQuestions.filter(
					question => !question.isAnswered
				)

				const orderedQuestions = [...unansweredQuestions, ...answeredQuestions]

				mutate(orderedQuestions, false)
			} else {
				mutate([], false)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [roomID, path, mutate])

	return {
		data,
		error,
		mutate,
		isLoading: !data && !error && isLoading
	}
}
