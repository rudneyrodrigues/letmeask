import { Link } from 'react-router'
import { FC, JSX, memo } from 'react'

import { Clipboard } from './clipboard'
import { Logo } from '@/components/assets'
import { useAuth } from '@/hooks/use-auth'
import { RoomProps } from '@/config/types'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'
import { ButtonIcon } from '@/components/ui/button-icon'
import { UserDropdown } from '@/components/app/user-dropdown'
import { ButtonSignInGoogle } from '@/components/app/button-sign-in-google'

interface HeaderProps {
	room: RoomProps
}

const Header: FC<HeaderProps> = memo(({ room }: HeaderProps): JSX.Element => {
	const { user } = useAuth()
	const isMobile = useIsMobile()

	const userIsRoomOwner = user && user.uid === room.createdBy

	return (
		<header className='flex h-20 flex-col border-b'>
			<div className='items mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4'>
				<Link to='/'>
					<Logo className='h-10 w-24' />
				</Link>

				<div className='flex items-center gap-2'>
					{room.open && userIsRoomOwner && (
						<>
							{isMobile ? (
								<ButtonIcon
									icon='trashSimple'
									variant='destructive'
									className='cursor-pointer'
								/>
							) : (
								<Button
									variant='destructive'
									leftIcon='trashSimple'
									className='cursor-pointer'
								>
									Encerrar sala
								</Button>
							)}
						</>
					)}

					{room.open && <Clipboard value={room.uid} />}

					{user ? (
						<UserDropdown />
					) : (
						<ButtonSignInGoogle size='default' title='Entrar' />
					)}
				</div>
			</div>
		</header>
	)
})
Header.displayName = 'Header'

export { Header }
