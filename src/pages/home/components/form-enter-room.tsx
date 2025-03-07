import { toast } from 'sonner'
import { useNavigate } from 'react-router'
import { FC, FormEvent, JSX, memo, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { enterRoom } from '../services/enter-room'

const FormEnterRoom: FC = memo((): JSX.Element => {
	const navigate = useNavigate()
	const [roomUid, setRoomUid] = useState('')
	const [loading, setLoading] = useState(false)

	const handleEnterRoom = async (e: FormEvent) => {
		e.preventDefault()
		setLoading(true)

		await enterRoom({ roomUid })
			.then(() => {
				navigate(`/rooms/${roomUid}`)

				setRoomUid('')
			})
			.catch(error => {
				console.error(error)

				toast.error('Não foi possível entrar na sala', {
					description:
						'Verifique se o código da sala está correto ou se a sala ainda está aberta e tente novamente',
					action: {
						label: 'Ok',
						onClick: () => {}
					}
				})
			})
			.finally(() => setLoading(false))
	}

	return (
		<form onSubmit={handleEnterRoom} className='flex w-full flex-col gap-4'>
			<Input
				type='text'
				name='room-uid'
				value={roomUid}
				autoComplete='off'
				placeholder='Digite o código da sala'
				onChange={e => setRoomUid(e.target.value.trim())}
				className='h-12'
			/>

			<Button
				size='lg'
				type='submit'
				leftIcon='logIn'
				loading={loading}
				disabled={!roomUid}
				loadingText='Entrando...'
				className='w-full cursor-pointer'
			>
				Entrar na sala
			</Button>
		</form>
	)
})
FormEnterRoom.displayName = 'FormEnterRoom'

export { FormEnterRoom }
