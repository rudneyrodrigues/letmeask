import useSWR from 'swr'
import { useEffect } from 'react'
import { get, onValue, ref } from 'firebase/database'

import { useAuth } from '../use-auth'
import { QuestionProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

type FirebaseQuestionsProps = Record<
	string,
	Omit<QuestionProps, 'id' | 'likeId' | 'likeCount'> & {
		likes: Record<string, boolean>
	}
>

const fetcher = async (path: string, userUid: string) => {
	const questionsRef = ref(realtimeDB, path)
	const snapshot = await get(questionsRef)

	if (!snapshot.exists()) return []

	const data = snapshot.val() as FirebaseQuestionsProps

	// Mapear perguntas
	const parsedQuestions = Object.entries(data).map(([key, value]) => ({
		id: key,
		...value,
		createdAt: new Date(value.createdAt).getTime(),
		likeCount: Object.values(value.likes ?? {}).length,
		likeId: Object.entries(value.likes ?? {}).find(
			([key]) => key === userUid
		)?.[0]
	}))

	// Ordenar perguntas por mais recentes
	const sortedQuestions = parsedQuestions.sort(
		(a, b) => Number(b.createdAt) - Number(a.createdAt)
	)

	// Caso a pergunta esteja respondida, ela deve ser enviada para o final da lista
	const answeredQuestions = sortedQuestions.filter(
		question => question.isAnswered
	)
	// Caso a pergunta não esteja respondida, ela deve ser enviada para o início da lista
	const unansweredQuestions = sortedQuestions.filter(
		question => !question.isAnswered
	)

	// Ordenando perguntas
	const orderedQuestions = [...unansweredQuestions, ...answeredQuestions]

	return orderedQuestions
}

export const useGetQuestions = (roomID: string) => {
	const { user } = useAuth()
	const userUid = user?.uid ?? ''
	const path = `rooms/${roomID}/questions`
	const { data, error, isLoading, mutate } = useSWR(
		path,
		() => fetcher(path, userUid),
		{
			revalidateOnFocus: false // Evita novas requisições ao focar no app
		}
	)

	useEffect(() => {
		if (!roomID) return

		const questionsRef = ref(realtimeDB, path)

		const unsubscribe = onValue(questionsRef, snapshot => {
			if (snapshot.exists()) {
				const data = snapshot.val() as FirebaseQuestionsProps

				// Mapear perguntas
				const parsedQuestions = Object.entries(data).map(([key, value]) => ({
					id: key,
					...value,
					createdAt: new Date(value.createdAt).getTime(),
					likeCount: Object.values(value.likes ?? {}).length,
					likeId: Object.entries(value.likes ?? {}).find(
						([key]) => key === userUid
					)?.[0]
				}))

				// Ordenar perguntas por mais recentes
				const sortedQuestions = parsedQuestions.sort(
					(a, b) => Number(b.createdAt) - Number(a.createdAt)
				)

				// Caso a pergunta esteja respondida, ela deve ser enviada para o final da lista
				const answeredQuestions = sortedQuestions.filter(
					question => question.isAnswered
				)
				// Caso a pergunta não esteja respondida, ela deve ser enviada para o início da lista
				const unansweredQuestions = sortedQuestions.filter(
					question => !question.isAnswered
				)

				// Ordenando perguntas
				const orderedQuestions = [...unansweredQuestions, ...answeredQuestions]

				// Atualizando perguntas
				mutate(orderedQuestions, false)
			} else {
				mutate([], false)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [roomID, path, mutate, userUid])

	return {
		data,
		error,
		mutate,
		isLoading: !data && !error && isLoading
	}
}
