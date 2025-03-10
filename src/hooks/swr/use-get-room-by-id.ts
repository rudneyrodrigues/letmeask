import useSWR from 'swr'
import { ref, child, get } from 'firebase/database'

import { RoomProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

export const useGetRoomById = (roomId: string) => {
	const fetcher = async () => {
		const dbRef = ref(realtimeDB)

		const snapshot = await get(child(dbRef, `rooms/${roomId}`))

		if (snapshot.exists()) {
			const data = snapshot.val() as Omit<RoomProps, 'uid'>

			const formattedData = {
				uid: roomId,
				...data
			} as RoomProps

			return formattedData
		} else {
			const error = new Error('Nenhum dado encontrado')

			throw error
		}
	}

	const { data, error, isLoading, mutate } = useSWR(
		`rooms/${roomId}`,
		fetcher,
		{
			revalidateOnFocus: false
		}
	)

	return {
		data,
		error,
		mutate,
		isLoading: !data && !error && isLoading
	}
}
