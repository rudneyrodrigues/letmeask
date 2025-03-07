import { FC, FormEvent, JSX, memo, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const FormCreateRoom: FC = memo((): JSX.Element => {
	const [roomTitle, setRoomTitle] = useState('')

	const handleEnterRoom = (e: FormEvent) => {
		e.preventDefault()

		console.log(`Criando a sala ${roomTitle.trim()}`)
	}

	return (
		<form
			onSubmit={handleEnterRoom}
			className='mt-14 flex w-full flex-col gap-4'
		>
			<Input
				type='text'
				name='room-title'
				value={roomTitle}
				autoComplete='off'
				placeholder='Nome da sala'
				onChange={e => setRoomTitle(e.target.value)}
				className='h-12'
			/>

			<Button
				size='lg'
				leftIcon='logIn'
				disabled={!roomTitle}
				className='w-full cursor-pointer'
			>
				Criar sala
			</Button>
		</form>
	)
})
FormCreateRoom.displayName = 'FormCreateRoom'

export { FormCreateRoom }
