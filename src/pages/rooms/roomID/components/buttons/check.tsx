import { FC, JSX } from 'react'

import { ButtonIcon } from '@/components/ui/button-icon'
import { updateQuestion } from '../../services/update-question'

type CheckButtonProps = {
	roomId: string
	roomOpen: boolean
	questionId: string
	isAnswered: boolean
}

const CheckButton: FC<CheckButtonProps> = ({
	roomId,
	roomOpen,
	questionId,
	isAnswered
}: CheckButtonProps): JSX.Element => {
	return (
		<ButtonIcon
			size='sm'
			icon='checkCircle'
			disabled={!roomOpen}
			variant={isAnswered ? 'default' : 'ghost'}
			iconWeight={isAnswered ? 'fill' : 'regular'}
			onClick={() => {
				updateQuestion({
					roomId,
					questionId,
					updates: { isAnswered: !isAnswered, isHighlighted: false }
				})
			}}
			className='cursor-pointer'
		/>
	)
}
CheckButton.displayName = 'CheckButton'

export { CheckButton }
