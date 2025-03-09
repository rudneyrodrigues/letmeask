import { toast } from 'sonner'
import { useNavigate } from 'react-router'
import { FC, FormEvent, JSX, memo, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { createRoom } from '../services/create-room'

const FormCreateRoom: FC = memo((): JSX.Element => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [roomTitle, setRoomTitle] = useState('')

	const handleEnterRoom = async (e: FormEvent) => {
		e.preventDefault()
		setLoading(true)

		if (!roomTitle.trim()) {
			setLoading(false)

			return toast.error('O nome da sala não pode estar vazio', {
				action: {
					label: 'Ok',
					onClick: () => {}
				}
			})
		}

		await createRoom({ roomTitle })
			.then(roomUid => {
				toast.success(`Sala "${roomTitle}" criada com sucesso`, {
					action: {
						label: 'Ok',
						onClick: () => {}
					}
				})

				return navigate(`/rooms/${roomUid}`)
			})
			.catch(error => {
				console.log(error)

				toast.error('Não foi possível criar a sala', {
					description: 'Tente novamente mais tarde',
					action: {
						label: 'Ok',
						onClick: () => {}
					}
				})
			})
			.finally(() => {
				setLoading(false)
				setRoomTitle('')
			})
	}

	return (
		<form onSubmit={handleEnterRoom} className='flex w-full flex-col gap-4'>
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
				type='submit'
				leftIcon='logIn'
				loading={loading}
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
