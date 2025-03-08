import { type FC, JSX, memo } from 'react'
import { Link, useNavigate } from 'react-router'

import { useAuth } from '@/hooks/use-auth'
import { Skeleton } from '@/components/ui/skeleton'
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
		return <Skeleton className='size-12 min-w-12 rounded-full' />
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='size-12 min-w-12 rounded-full border focus:outline-2 focus:outline-offset-2'>
				<img
					alt='Rudney Rodrigues do Nascimento'
					src='https://avatars.githubusercontent.com/u/68288226?v=4'
					className='flex-1 cursor-pointer rounded-full'
				/>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end' className='w-52'>
				<DropdownMenuLabel>Minha conta</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem>Meu perfil</DropdownMenuItem>
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
