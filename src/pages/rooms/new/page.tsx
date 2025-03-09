import { Link } from 'react-router'
import { FC, JSX, memo } from 'react'

import { Header } from '@/components/app/header'
import { Illustration } from '@/components/assets'
import { FormCreateRoom } from './components/form-create-room'

const RoomNew: FC = memo((): JSX.Element => {
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
					<FormCreateRoom />

					<div className='mt-4 space-x-1'>
						<span className='text-muted-foreground text-sm'>
							Quer entrar em uma sala já existente?
						</span>
						<Link
							to='/'
							className='text-primary text-sm hover:underline hover:underline-offset-4'
						>
							Clique aqui
						</Link>
					</div>
				</main>
			</section>
		</div>
	)
})
RoomNew.displayName = 'RoomNew'

export { RoomNew }
