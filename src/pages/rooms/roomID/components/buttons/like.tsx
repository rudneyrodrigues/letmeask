import { FC, JSX } from 'react'
import { get, ref, remove, set } from 'firebase/database'

import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/use-auth'
import { realtimeDB } from '@/services/firebase'
import { ButtonIcon } from '@/components/ui/button-icon'

type LikeButtonProps = {
	roomId: string
	likeCount: number
	questionId: string
	likeId: string | undefined
}

const LikeButton: FC<LikeButtonProps> = ({
	roomId,
	likeId,
	likeCount,
	questionId
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

				<ButtonIcon size='sm' icon='like' variant='ghost' disabled={!user} />
			</div>
		)
	}

	const handleLike = async () => {
		const likeRef = ref(
			realtimeDB,
			`rooms/${roomId}/questions/${questionId}/likes/${user.uid}`
		)
		const likeSnapshot = await get(likeRef)

		if (likeSnapshot.exists()) {
			await remove(likeRef)
		} else {
			await set(likeRef, true)
		}
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
				disabled={!user}
				onClick={handleLike}
				variant={likeId ? 'default' : 'ghost'}
				iconWeight={likeId ? 'fill' : 'regular'}
				className='cursor-pointer'
			/>
		</div>
	)
}
LikeButton.displayName = 'LikeButton'

export { LikeButton }
