import { FC, JSX } from 'react'

import { ButtonIcon } from '@/components/ui/button-icon'

const CheckButton: FC = (): JSX.Element => {
	return (
		<ButtonIcon
			size='sm'
			variant='ghost'
			icon='checkCircle'
			className='cursor-pointer'
		/>
	)
}
CheckButton.displayName = 'CheckButton'

export { CheckButton }
