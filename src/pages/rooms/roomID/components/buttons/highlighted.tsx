import { FC, JSX } from 'react'

import { ButtonIcon } from '@/components/ui/button-icon'
import { updateQuestion } from '../../services/update-question'

type HighlightedButtonProps = {
	roomId: string
	roomOpen: boolean
	questionId: string
	isAnswered: boolean
	isHighlighted: boolean
}

const HighlightedButton: FC<HighlightedButtonProps> = ({
	roomId,
	roomOpen,
	questionId,
	isAnswered,
	isHighlighted
}: HighlightedButtonProps): JSX.Element => {
	return (
		<ButtonIcon
			size='sm'
			icon='chatCircle'
			disabled={isAnswered || !roomOpen}
			variant={isHighlighted ? 'default' : 'ghost'}
			iconWeight={isHighlighted ? 'fill' : 'regular'}
			onClick={() =>
				updateQuestion({
					roomId,
					questionId,
					updates: { isHighlighted: !isHighlighted }
				})
			}
			className='cursor-pointer'
		/>
	)
}
HighlightedButton.displayName = 'HighlightedButton'

export { HighlightedButton }
