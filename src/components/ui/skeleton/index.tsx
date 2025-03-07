import { type FC, type HTMLAttributes, JSX, memo } from 'react'

import { cn } from '@/lib/utils'

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {}

const Skeleton: FC<SkeletonProps> = memo(
	({ className, ...props }: SkeletonProps): JSX.Element => {
		return (
			<div
				className={cn('bg-primary/10 animate-pulse rounded-md', className)}
				{...props}
			/>
		)
	}
)
Skeleton.displayName = 'Skeleton'

export { Skeleton }
