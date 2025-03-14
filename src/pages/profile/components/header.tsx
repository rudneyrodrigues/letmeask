import { Link } from 'react-router'
import { FC, JSX, memo } from 'react'

import { Logo } from '@/components/assets'
import { UserDropdown } from '@/components/app/user-dropdown'

const Header: FC = memo((): JSX.Element => {
	return (
		<header className='flex h-20 flex-col border-b'>
			<div className='items mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4'>
				<Link to='/'>
					<Logo className='h-10 w-24' />
				</Link>

				<div className='flex items-center gap-2'>
					<UserDropdown />
				</div>
			</div>
		</header>
	)
})
Header.displayName = 'Header'

export { Header }
