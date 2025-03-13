import { type FC, JSX, memo } from 'react'
import { Link, useNavigate } from 'react-router'

import { useAuth } from '@/hooks/use-auth'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

const UserDropdown: FC = memo((): JSX.Element => {
	const navigate = useNavigate()
	const { user, logout, loading } = useAuth()

	const handleLogout = async () => {
		await logout()

		navigate('/')
	}

	if (loading || !user) {
		return <Skeleton className='size-10 min-w-10 rounded-full' />
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='size-10 min-w-10 rounded-full focus:outline-2 focus:outline-offset-2'>
				<Avatar>
					<AvatarImage
						alt={String(user.displayName)}
						src={String(user.photoURL)}
					/>
					<AvatarFallback>
						{String(user.displayName)
							.split(' ')
							.map(name => name[0])
							.slice(0, 2)
							.join('')}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end' className='w-52'>
				<DropdownMenuLabel>Minha conta</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild>
					<Link to='/profile'>Meu perfil</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link to='/rooms'>Minhas salas</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>Configurações</DropdownMenuItem>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					onClick={handleLogout}
					className='text-destructive focus:bg-destructive focus:text-destructive-foreground'
				>
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
})
UserDropdown.displayName = 'UserDropdown'

export { UserDropdown }
