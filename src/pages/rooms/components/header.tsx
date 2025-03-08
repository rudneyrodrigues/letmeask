import { FC, JSX, memo } from 'react'

import { Logo } from '@/components/assets'
import { UserDropdown } from '@/components/app/user-dropdown'

const Header: FC = memo((): JSX.Element => {
	return (
		<header className='flex w-full flex-col items-center justify-center gap-6'>
			<Logo />

			<div className='flex w-full items-center justify-between gap-2 border-b pb-2'>
				<h2 className='w-full scroll-m-20 pb-2 text-3xl font-semibold tracking-tight'>
					Minhas salas
				</h2>

				<UserDropdown />
			</div>
		</header>
	)
})
Header.displayName = 'Header'

export { Header }
