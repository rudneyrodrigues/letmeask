import { FC, JSX, memo } from 'react'
import { useParams } from 'react-router'

import { Header } from './components/header'

const RoomID: FC = memo((): JSX.Element => {
	const { roomID } = useParams() as { roomID: string }

	return (
		<div className='flex min-h-svh flex-col'>
			<Header />

			<main className='flex flex-1 items-center justify-center'>
				<h2>ID da sala: {roomID}</h2>
			</main>
		</div>
	)
})
RoomID.displayName = 'RoomID'

export { RoomID }
