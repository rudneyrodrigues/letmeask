import { FC, JSX, memo } from 'react'

const Rooms: FC = memo((): JSX.Element => {
	return (
		<div className='flex min-h-svh flex-col'>
			<main className='flex-1 items-center justify-center'>
				<h2>Minhas salas</h2>
			</main>
		</div>
	)
})
Rooms.displayName = 'Rooms'

export { Rooms }
