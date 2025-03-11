import { useEffect, useState } from 'react'
import { onValue, ref } from 'firebase/database'

import { QuestionProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

type FirebaseQuestionsProps = Record<
	string,
	{
		question: string
		createdAt: Date
		isAnswered: boolean
		isHighlighted: boolean
		author: {
			uid: string
			name: string
		}
	}
>

const useQuestions = (roomID: string) => {
	const [error, setError] = useState<Error | null>(null)
	const [questions, setQuestions] = useState<QuestionProps[]>([])

	useEffect(() => {
		if (!roomID) return

		const questionsRef = ref(realtimeDB, `rooms/${roomID}/questions`)

		// Escutando alterações em tempo real
		const unsubscribe = onValue(
			questionsRef,
			snapshot => {
				if (snapshot.exists()) {
					const data = snapshot.val() as FirebaseQuestionsProps

					const parsedQuestions = Object.entries(data).map(([key, value]) => ({
						id: key,
						createdAt: value.createdAt,
						question: value.question,
						isAnswered: value.isAnswered,
						isHighlighted: value.isHighlighted,
						author: {
							uid: value.author.uid,
							name: value.author.name
						}
					}))

					setQuestions(parsedQuestions)
				} else {
					setQuestions([])
				}
			},
			error => {
				console.log('Erro ao buscar perguntas:', error)
				setError(error)
			}
		)

		return () => {
			unsubscribe()
		}
	}, [roomID])

	return { error, questions }
}

export { useQuestions }
