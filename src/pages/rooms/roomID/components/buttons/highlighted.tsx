import { FC, JSX } from 'react'

import { ButtonIcon } from '@/components/ui/button-icon'

const HighlightedButton: FC = (): JSX.Element => {
	return (
		<ButtonIcon
			size='sm'
			variant='ghost'
			icon='chatCircle'
			className='cursor-pointer'
		/>
	)
}
HighlightedButton.displayName = 'HighlightedButton'

export { HighlightedButton }
