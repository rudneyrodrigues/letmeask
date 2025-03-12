import useSWR from 'swr'
import { useEffect } from 'react'
import { ref, child, get, onValue } from 'firebase/database'

import { RoomProps } from '@/config/types'
import { realtimeDB } from '@/services/firebase'

type FirebaseRoomProps = Record<string, Omit<RoomProps, 'uid'>>

const fetcher = async (path: string, roomId: string) => {
	const dbRef = ref(realtimeDB)

	const snapshot = await get(child(dbRef, path))

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

export const useGetRoomById = (roomId: string) => {
	const path = `rooms/${roomId}`
	const { data, error, isLoading, mutate } = useSWR(
		path,
		() => fetcher(path, roomId),
		{
			revalidateOnFocus: false
		}
	)

	useEffect(() => {
		if (!roomId) return

		const roomRef = ref(realtimeDB, path)

		const unsubscribe = onValue(roomRef, snapshot => {
			if (snapshot.exists()) {
				const data = snapshot.val() as FirebaseRoomProps

				const formattedData = {
					uid: roomId,
					...data
				} as RoomProps

				mutate(formattedData, false)
			} else {
				mutate(undefined, false)
			}
		})

		return () => unsubscribe()
	}, [roomId, path, mutate])

	return {
		data,
		error,
		mutate,
		isLoading: !data && !error && isLoading
	}
}
