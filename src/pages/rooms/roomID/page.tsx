import { FC, JSX, memo } from 'react'
import { useParams } from 'react-router'

import { Header } from './components/header'
import { Badge } from '@/components/ui/badge'
import { Questions } from './sections/questions'
import { ErrorPage } from './sections/error-skeleton'
import { LoadingPage } from './sections/loading-skeleton'
import { FormNewQuestion } from './sections/form-new-question'
import { useGetRoomById } from '@/hooks/swr/use-get-room-by-id'

const RoomID: FC = memo((): JSX.Element => {
	const { roomID } = useParams() as { roomID: string }
	const { data, error, isLoading } = useGetRoomById(roomID)

	if (isLoading || !data) {
		return <LoadingPage />
	}

	if (error) {
		return <ErrorPage />
	}

	return (
		<div className='flex min-h-svh flex-col'>
			<Header room={data} />

			<main className='flex flex-1 flex-col items-center justify-center px-4 py-8'>
				<div className='mx-auto flex w-full max-w-[800px] flex-1 flex-col'>
					<div className='mb-6 flex w-full flex-col-reverse items-start justify-center gap-2 md:flex-row md:items-center md:justify-start'>
						<h2 className='scroll-m-20 text-xl font-semibold tracking-tight md:text-3xl'>
							{data.title}
						</h2>

						<Badge variant={data.open ? 'default' : 'destructive'}>
							{data.open ? 'Aberta' : 'Fechada'}
						</Badge>
					</div>

					<FormNewQuestion room={data} />

					<Questions room={data} />
				</div>
			</main>
		</div>
	)
})
RoomID.displayName = 'RoomID'

export { RoomID }
