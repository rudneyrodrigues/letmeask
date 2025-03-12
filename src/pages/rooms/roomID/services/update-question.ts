import { ref, update } from 'firebase/database'

import { QuestionProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

type UpdateQuestionProps = {
	roomId: string
	questionId: string
	updates: Partial<QuestionProps>
}

export const updateQuestion = async ({
	roomId,
	updates,
	questionId
}: UpdateQuestionProps) => {
	const questionRef = ref(realtimeDB, `rooms/${roomId}/questions/${questionId}`)

	await update(questionRef, updates)
}
