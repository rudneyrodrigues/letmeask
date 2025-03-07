import { parseCookies } from 'nookies'
import { ref, set } from 'firebase/database'

import { realtimeDB } from '@/services/firebase'

type CreateRoomProps = {
	roomTitle: string
}

export const createRoom = async ({ roomTitle }: CreateRoomProps) => {
	const cookies = parseCookies()
	const roomUid = crypto.randomUUID() as string

	const { '@user.uid': userUid } = cookies

	await set(ref(realtimeDB, 'rooms/' + roomUid), {
		title: roomTitle,
		createdAt: new Date().toISOString(),
		createdBy: userUid
	})

	return roomUid
}
