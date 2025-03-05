import { FC, JSX } from 'react'

import { Input } from '@/components/ui/input'
import { Logo } from '@/components/assets/logo'
import { Button } from '@/components/ui/button'
import { Illustration } from '@/components/assets/illustration'

const Home: FC = (): JSX.Element => {
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

					<Button
						size='lg'
						leftIcon='google'
						className='bg-google text-google-foreground hover:bg-google/90 mt-14 w-full'
					>
						Crie sua sala com o Google
					</Button>

					<span className='text-muted-foreground before:content-[] before:bg-muted-foreground after:content-[] after:bg-muted-foreground my-8 flex w-full items-center gap-2 truncate text-sm font-normal lowercase before:h-[1px] before:w-full after:h-[1px] after:w-full'>
						Ou entre em uma sala
					</span>

					<form className='flex w-full flex-col gap-4'>
						<Input
							type='text'
							name='room-code'
							placeholder='Digite o código da sala'
							className='h-12'
						/>

						<Button size='lg' leftIcon='logIn' className='w-full'>
							Entrar na sala
						</Button>
					</form>
				</main>
			</div>
		</div>
	)
}

export { Home }
