import { get, ref, remove, set } from 'firebase/database'

import { realtimeDB } from '@/services/firebase'

type HandleLikeProps = {
	roomId: string
	questionId: string
	userUid: string
}

export const handleLike = async ({
	roomId,
	userUid,
	questionId
}: HandleLikeProps) => {
	const likeRef = ref(
		realtimeDB,
		`rooms/${roomId}/questions/${questionId}/likes/${userUid}`
	)
	const likeSnapshot = await get(likeRef)

	if (likeSnapshot.exists()) {
		await remove(likeRef)
	} else {
		await set(likeRef, true)
	}
}
