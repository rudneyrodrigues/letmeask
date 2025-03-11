import { ref, set } from 'firebase/database'

import { realtimeDB } from '@/services/firebase'

type SendQuestionProps = {
	roomID: string
	question: string
	author: {
		uid: string
		name: string
		avatar?: string
	}
}

const sendQuestion = async ({
	roomID,
	author,
	question
}: SendQuestionProps) => {
	const questionId = crypto.randomUUID() as string

	const data = {
		question,
		author: {
			uid: author.uid,
			name: author.name,
			avatar: author.avatar
		},
		isHighlighted: false,
		isAnswered: false,
		createdAt: new Date().toISOString()
	}

	try {
		await set(ref(realtimeDB, `rooms/${roomID}/questions/${questionId}`), data)
	} catch (error) {
		console.error(error)

		throw new Error('Não foi possível enviar a pergunta.')
	}
}

export { sendQuestion }
