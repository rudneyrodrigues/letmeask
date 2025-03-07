import { Link } from 'react-router'
import { FC, JSX, memo } from 'react'

import { useAuth } from '@/hooks/use-auth'
import { UserDropdown } from './user-dropdown'
import { Logo } from '@/components/assets/logo'
import { Button } from '@/components/ui/button'
import { ButtonSignInGoogle } from './button-sign-in-google'

const Header: FC = memo((): JSX.Element => {
	const { user } = useAuth()

	return (
		<header className='flex w-full flex-col items-center justify-center gap-14'>
			<Logo />

			{!user ? (
				<ButtonSignInGoogle />
			) : (
				<div className='flex w-full items-center justify-between gap-2'>
					<Button
						size='lg'
						leftIcon='add'
						variant='secondary'
						className='w-full'
						asChild
					>
						<Link to='/rooms/new'>Criar uma nova sala</Link>
					</Button>

					<UserDropdown />
				</div>
			)}
		</header>
	)
})
Header.displayName = 'Header'

export { Header }
