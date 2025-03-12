import { ref, update } from 'firebase/database'

import { RoomProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

type UpdateRoomProps = {
	roomId: string
	updates: Partial<RoomProps>
}

export const updateRoom = async ({ roomId, updates }: UpdateRoomProps) => {
	const roomRef = ref(realtimeDB, `rooms/${roomId}`)

	await update(roomRef, updates)
}
