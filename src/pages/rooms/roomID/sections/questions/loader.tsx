import { FC, memo } from 'react'

import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/use-auth'
import { Skeleton } from '@/components/ui/skeleton'

type LoaderQuestionsProps = {
	quantityOfSkeletons?: number
	userIsCreator: boolean | null
}

const LoaderQuestions: FC<LoaderQuestionsProps> = memo(
	({ userIsCreator, quantityOfSkeletons = 5 }: LoaderQuestionsProps) => {
		const { user } = useAuth()

		return (
			<section
				className={cn(
					'flex flex-1 flex-col items-center justify-start',
					user ? 'mt-0' : 'mt-16'
				)}
			>
				<div
					className={cn(
						'flex w-full flex-col gap-4',
						!userIsCreator && 'mt-10'
					)}
				>
					{Array.from({ length: quantityOfSkeletons }).map((_, index) => (
						<Skeleton key={index} className='h-40 w-full' />
					))}
				</div>
			</section>
		)
	}
)
LoaderQuestions.displayName = 'LoaderQuestions'

export { LoaderQuestions }
