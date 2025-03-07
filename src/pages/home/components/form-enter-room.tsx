import { type FC, type FormEvent, JSX, memo, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const FormEnterRoom: FC = memo((): JSX.Element => {
	const [roomCode, setRoomCode] = useState('')
	const handleEnterRoom = (e: FormEvent) => {
		e.preventDefault()

		console.log(`Entrar na sala ${roomCode}`)
	}

	return (
		<form onSubmit={handleEnterRoom} className='flex w-full flex-col gap-4'>
			<Input
				type='text'
				name='room-code'
				value={roomCode}
				placeholder='Digite o código da sala'
				onChange={e => setRoomCode(e.target.value.trim())}
				className='h-12'
			/>

			<Button
				size='lg'
				leftIcon='logIn'
				disabled={!roomCode}
				className='w-full cursor-pointer'
			>
				Entrar na sala
			</Button>
		</form>
	)
})
FormEnterRoom.displayName = 'FormEnterRoom'

export { FormEnterRoom }
