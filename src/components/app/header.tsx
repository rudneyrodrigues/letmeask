import { Link } from 'react-router'
import { FC, JSX, memo } from 'react'

import { useAuth } from '@/hooks/use-auth'
import { Logo } from '@/components/assets/logo'
import { UserDropdown } from '@/components/app/user-dropdown'

const Header: FC = memo((): JSX.Element => {
	const { user } = useAuth()

	return (
		<header className='flex w-full items-center justify-between gap-4 p-4'>
			<Link to='/'>
				<Logo className='h-10 w-24' />
			</Link>

			{user && <UserDropdown />}
		</header>
	)
})
Header.displayName = 'Header'

export { Header }
