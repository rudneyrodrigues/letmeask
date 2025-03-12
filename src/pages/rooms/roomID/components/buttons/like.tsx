import { FC, JSX } from 'react'

import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/use-auth'
import { handleLike } from '../../services/handle-like'
import { ButtonIcon } from '@/components/ui/button-icon'

type LikeButtonProps = {
	roomId: string
	roomOpen: boolean
	likeCount: number
	questionId: string
	isAnswered: boolean
	likeId: string | undefined
}

const LikeButton: FC<LikeButtonProps> = ({
	roomId,
	likeId,
	roomOpen,
	likeCount,
	questionId,
	isAnswered
}: LikeButtonProps): JSX.Element => {
	const { user } = useAuth()

	if (!user) {
		return (
			<div className='flex items-center gap-2'>
				<span
					className={cn(
						'text-muted-foreground text-sm',
						likeId && 'text-foreground font-bold'
					)}
				>
					{likeCount}
				</span>

				<ButtonIcon
					size='sm'
					icon='like'
					variant='ghost'
					disabled={!user || isAnswered || !roomOpen}
				/>
			</div>
		)
	}

	return (
		<div className='flex items-center gap-2'>
			<span
				className={cn(
					'text-muted-foreground text-sm',
					likeId && 'text-foreground font-bold'
				)}
			>
				{likeCount}
			</span>

			<ButtonIcon
				size='sm'
				icon='like'
				variant={likeId ? 'default' : 'ghost'}
				iconWeight={likeId ? 'fill' : 'regular'}
				disabled={!user || isAnswered || !roomOpen}
				onClick={() => handleLike({ roomId, userUid: user.uid, questionId })}
				className='cursor-pointer'
			/>
		</div>
	)
}
LikeButton.displayName = 'LikeButton'

export { LikeButton }
