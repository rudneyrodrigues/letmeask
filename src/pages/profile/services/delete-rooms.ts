import {
	equalTo,
	get,
	orderByChild,
	query,
	ref,
	remove
} from 'firebase/database'

import { RoomProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

export const deleteRooms = async (uid: string) => {
	const dbRef = ref(realtimeDB, 'rooms')

	const roomsQuery = query(dbRef, orderByChild('createdBy'), equalTo(uid))

	const snapshot = await get(roomsQuery)

	if (snapshot.exists()) {
		const data = snapshot.val() as Record<string, Omit<RoomProps, 'uid'>>

		const deleteRooms = Object.entries(data).map(([key]) =>
			remove(ref(realtimeDB, `rooms/${key}`))
		)

		await Promise.all(deleteRooms)
	}
}
