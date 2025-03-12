import { ref, remove } from 'firebase/database'

import { realtimeDB } from '@/services/firebase'

export const deleteQuestion = async (roomId: string, questionId: string) => {
	const questionRef = ref(realtimeDB, `rooms/${roomId}/questions/${questionId}`)

	await remove(questionRef)
}
