import { FC, JSX } from 'react'

import { ButtonIcon } from '@/components/ui/button-icon'

const TrashButton: FC = (): JSX.Element => {
	return (
		<ButtonIcon
			size='sm'
			variant='ghost'
			icon='trashSimple'
			className='cursor-pointer'
		/>
	)
}
TrashButton.displayName = 'TrashButton'

export { TrashButton }
