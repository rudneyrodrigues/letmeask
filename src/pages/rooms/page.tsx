import { FC, JSX, memo } from 'react'

import { Icon } from '@/components/ui/icon'
import { Header } from '@/components/app/header'
import { CardRoom } from './components/card-room'
import { Illustration } from '@/components/assets'
import { useGetAllRooms } from '@/hooks/swr/use-get-all-rooms'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const Rooms: FC = memo((): JSX.Element => {
	const { data, error, isLoading } = useGetAllRooms()

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

				<main className='mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center rounded-md p-4'>
					{isLoading ? (
						<div className='flex flex-col items-center justify-center gap-2'>
							<Icon.loading
								size={40}
								weight='regular'
								className='animate-spin'
							/>
							<span className='text-muted-foreground animate-pulse'>
								Carregando...
							</span>
						</div>
					) : error ? (
						<div className='w-full'>
							<Alert variant='destructive'>
								<Icon.warning size={20} weight='bold' />
								<AlertTitle>Erro!</AlertTitle>
								<AlertDescription>
									Ocorreu um erro ao carregar as salas. Por favor, tente
									novamente mais tarde.
								</AlertDescription>
							</Alert>
						</div>
					) : (
						<div className='flex w-full flex-col gap-4'>
							{data ? (
								data.map(room => <CardRoom key={room.uid} room={room} />)
							) : (
								<Alert variant='destructive'>
									<Icon.warning size={20} weight='bold' />
									<AlertTitle>Erro!</AlertTitle>
									<AlertDescription>
										Nenhuma sala foi encontrada. Por favor, tente novamente mais
										tarde.
									</AlertDescription>
								</Alert>
							)}
						</div>
					)}
				</main>
			</section>
		</div>
	)
})
Rooms.displayName = 'Rooms'

export { Rooms }
