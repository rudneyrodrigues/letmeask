import useSWR from 'swr'
import { parseCookies } from 'nookies'
import { equalTo, get, orderByChild, query, ref } from 'firebase/database'

import { RoomProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

export const useGetAllRooms = () => {
	const cookies = parseCookies()
	const userUid = cookies['@user.uid']

	const fetcher = async () => {
		const dbRef = ref(realtimeDB, 'rooms')

		const roomsQuery = query(dbRef, orderByChild('createdBy'), equalTo(userUid))

		const snapshot = await get(roomsQuery)

		if (snapshot.exists()) {
			const data = snapshot.val() as Record<string, Omit<RoomProps, 'uid'>>
			const rooms = Object.entries(data).map(([key, value]) => ({
				uid: key,
				...value
			}))

			// Ordene as salas por data de criação
			rooms.sort((a, b) => {
				if (a.createdAt > b.createdAt) return -1
				if (a.createdAt < b.createdAt) return 1
				return 0
			})

			return rooms
		} else {
			const error = new Error('Nenhum dado encontrado')

			throw error
		}
	}

	const { data, error, isLoading, mutate } = useSWR(
		`rooms/${userUid}`,
		fetcher,
		{
			revalidateOnFocus: false
		}
	)

	return {
		data,
		mutate,
		error: !data && error,
		isLoading: !data && !error && isLoading
	}
}
