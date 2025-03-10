import { FC, JSX, memo } from 'react'

import { Skeleton } from '@/components/ui/skeleton'

const LoadingPage: FC = memo((): JSX.Element => {
	return (
		<div className='flex min-h-svh flex-col'>
			<header className='flex h-20 flex-col border-b'>
				<div className='items mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4'>
					<Skeleton className='h-10 w-24' />

					<div className='flex items-center gap-2'>
						<Skeleton className='h-10 w-52' />
						<Skeleton className='h-10 w-52' />
						<Skeleton className='h-10 min-h-10 w-10 min-w-10' />
					</div>
				</div>
			</header>

			<main className='flex flex-1 flex-col items-center justify-center px-4 py-8'>
				<div className='mx-auto flex w-full max-w-[800px] flex-1 flex-col'>
					<Skeleton className='h-12 w-full max-w-96' />

					<section className='mt-6 space-y-4'>
						<Skeleton className='h-40 w-full' />

						<Skeleton className='ml-auto h-10 w-40' />
					</section>

					<section className='mt-12 space-y-2'>
						{new Array(3).fill(0).map((_, index) => (
							<Skeleton key={index} className='h-40 w-full' />
						))}
					</section>
				</div>
			</main>
		</div>
	)
})
LoadingPage.displayName = 'LoadingPage'

export { LoadingPage }
