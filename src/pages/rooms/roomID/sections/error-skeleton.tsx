import { FC, JSX, memo } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Icon } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const ErrorPage: FC = memo((): JSX.Element => {
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
					<section className='flex flex-col items-end justify-center gap-4'>
						<Alert variant='destructive'>
							<Icon.warning size={20} />
							<AlertTitle>Erro ao carregar dados do servidor</AlertTitle>
							<AlertDescription>Tente novamente mais tarde</AlertDescription>
						</Alert>

						<Button variant='ghost' leftIcon='home' asChild>
							<Link to='/'>Voltar para a página inicial</Link>
						</Button>
					</section>

					<section className='mt-12 space-y-2'>
						<Skeleton className='h-40 w-full' />
					</section>
				</div>
			</main>
		</div>
	)
})
ErrorPage.displayName = 'ErrorPage'

export { ErrorPage }
