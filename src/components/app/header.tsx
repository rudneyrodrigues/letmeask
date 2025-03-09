import { Link } from 'react-router'
import { FC, JSX, memo } from 'react'

import { Logo } from '@/components/assets/logo'
import { UserDropdown } from '@/components/app/user-dropdown'

const Header: FC = memo((): JSX.Element => {
	return (
		<header className='flex w-full items-center justify-between gap-4 p-4'>
			<Link to='/'>
				<Logo className='h-10 w-24' />
			</Link>

			<UserDropdown />
		</header>
	)
})
Header.displayName = 'Header'

export { Header }
