import { Link } from 'react-router'
import { FC, JSX, memo } from 'react'

import { Clipboard } from './clipboard'
import { Logo } from '@/components/assets'

const Header: FC = memo((): JSX.Element => {
	return (
		<header className='flex h-20 flex-col border-b'>
			<div className='items mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4'>
				<Link to='/'>
					<Logo className='h-10 w-24' />
				</Link>

				<Clipboard value='51ee3a12-060d-490c-ae53-1e0234fade93' />
			</div>
		</header>
	)
})
Header.displayName = 'Header'

export { Header }
