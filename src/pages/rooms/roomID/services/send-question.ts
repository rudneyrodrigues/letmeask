import { ref, set } from 'firebase/database'

import { realtimeDB } from '@/services/firebase'
import { randomUUID } from 'crypto'

type SendQuestionProps = {
	roomID: string
	question: string
	author: {
		uid: string
		name: string
	}
}

const sendQuestion = async ({
	roomID,
	author,
	question
}: SendQuestionProps) => {
	const questionId = randomUUID() as string

	const data = {
		question,
		author: {
			uid: author.uid,
			name: author.name
		},
		isHighlighted: false,
		isAnswered: false
	}

	try {
		await set(ref(realtimeDB, `rooms/${roomID}/questions/${questionId}`), data)
	} catch (error) {
		console.error(error)

		throw new Error('Não foi possível enviar a pergunta.')
	}
}

export { sendQuestion }
