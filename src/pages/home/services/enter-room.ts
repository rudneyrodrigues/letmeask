import { child, get, ref } from 'firebase/database'

import { realtimeDB } from '@/services/firebase'
import { NoDataFoundError, EnterRoomError } from './errors'

type EnterRoomProps = {
	roomUid: string
}

type RoomData = {
	open: boolean
}

export const enterRoom = async ({ roomUid }: EnterRoomProps) => {
	const dbRef = ref(realtimeDB)

	const getRoom = await get(child(dbRef, `rooms/${roomUid}`))
		.then(snapshot => {
			const data = snapshot.exists() ? (snapshot.val() as RoomData) : null

			if (data && data.open) {
				return roomUid
			} else if (data && !data.open) {
				throw new EnterRoomError()
			} else {
				throw new NoDataFoundError()
			}
		})
		.catch(error => {
			console.error(error)

			throw new EnterRoomError()
		})

	return getRoom
}
