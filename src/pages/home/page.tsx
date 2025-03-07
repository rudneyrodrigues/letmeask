import { type FC, type FormEvent, JSX, useState } from 'react'

import { useAuth } from '@/hooks/use-auth'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/assets/logo'
import { Button } from '@/components/ui/button'
import { Illustration } from '@/components/assets/illustration'
import { Icon } from '@/components/ui/icon'

const Home: FC = (): JSX.Element => {
	const [roomCode, setRoomCode] = useState('')
	const { user, logout, loading, loginWithGoogle } = useAuth()

	const handleEnterRoom = (e: FormEvent) => {
		e.preventDefault()

		console.log(`Entrar na sala ${roomCode}`)
	}

	return (
		<div className='flex min-h-svh'>
			<div className='bg-primary hidden flex-1 flex-col items-center justify-center p-4 lg:flex'>
				<div className='mx-auto w-full max-w-[459px]'>
					<Illustration />

					<h2 className='mt-2 text-4xl leading-10 font-bold text-zinc-50'>
						Toda pergunta tem uma resposta.
					</h2>

					<p className='mt-4 text-2xl leading-8 font-normal text-zinc-200'>
						Aprenda e compartilhe conhecimento com outras pessoas.
					</p>
				</div>
			</div>

			<div className='flex flex-1 flex-col items-center justify-center gap-4'>
				<main className='flex w-full max-w-[320px] flex-col items-center justify-center rounded-md p-4'>
					<Logo />

					{!user ? (
						<Button
							size='lg'
							leftIcon='google'
							loading={loading}
							loadingText='Entrando...'
							onClick={loginWithGoogle}
							className='bg-google text-google-foreground hover:bg-google/90 mt-14 w-full cursor-pointer'
						>
							Crie sua sala com o Google
						</Button>
					) : (
						<div className='mt-14 flex w-full items-center justify-between gap-4 rounded-md border p-4'>
							<h2>{user.displayName}</h2>

							<Button size='sm' variant='destructive' onClick={logout}>
								<Icon.logOut size={20} weight='bold' />
							</Button>
						</div>
					)}

					<span className='text-muted-foreground before:content-[] before:bg-muted-foreground after:content-[] after:bg-muted-foreground my-8 flex w-full items-center gap-2 truncate text-sm font-normal lowercase before:h-[1px] before:w-full after:h-[1px] after:w-full'>
						Ou entre em uma sala
					</span>

					<form
						onSubmit={handleEnterRoom}
						className='flex w-full flex-col gap-4'
					>
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
				</main>
			</div>
		</div>
	)
}

export { Home }
