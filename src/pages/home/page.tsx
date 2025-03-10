import { Link } from 'react-router'
import { type FC, JSX } from 'react'

import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Header } from '../../components/app/header'
import { FormEnterRoom } from './sections/form-enter-room'
import { Illustration } from '@/components/assets/illustration'
import { ButtonSignInGoogle } from '../../components/app/button-sign-in-google'

const Home: FC = (): JSX.Element => {
	const { user } = useAuth()

	return (
		<div className='flex min-h-svh'>
			<section className='bg-primary hidden flex-1 flex-col items-center justify-center p-4 lg:flex'>
				<div className='mx-auto w-full max-w-[459px]'>
					<Illustration />

					<h2 className='mt-2 text-4xl leading-10 font-bold text-zinc-50'>
						Toda pergunta tem uma resposta.
					</h2>

					<p className='mt-4 text-2xl leading-8 font-normal text-zinc-200'>
						Aprenda e compartilhe conhecimento com outras pessoas.
					</p>
				</div>
			</section>

			<section className='flex flex-1 flex-col gap-4'>
				<Header />

				<main className='mx-auto flex w-full max-w-sm flex-1 flex-col items-center justify-center rounded-md p-4'>
					<div className='w-full'>
						{!user ? (
							<ButtonSignInGoogle />
						) : (
							<Button
								size='lg'
								leftIcon='add'
								variant='secondary'
								className='w-full'
								asChild
							>
								<Link to='/rooms/new'>Criar uma nova sala</Link>
							</Button>
						)}
					</div>

					<span className='text-muted-foreground before:content-[] before:bg-muted after:content-[] after:bg-muted my-8 flex w-full items-center gap-2 truncate text-sm font-normal lowercase before:h-[1px] before:w-full after:h-[1px] after:w-full'>
						Ou entre em uma sala
					</span>

					<FormEnterRoom />
				</main>
			</section>
		</div>
	)
}

export { Home }
