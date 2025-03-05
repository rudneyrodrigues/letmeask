import { FC, JSX } from 'react'

import { Link } from 'react-router'
import { Logo } from '@/components/assets/logo'
import { Button } from '@/components/ui/button'

const Home: FC = (): JSX.Element => {
	return (
		<div className='flex min-h-svh flex-col'>
			<main className='flex flex-1 flex-col-reverse items-center justify-center gap-4'>
				<Button asChild>
					<Link to='/about'>About page</Link>
				</Button>

				<h2>Home Page</h2>

				<Logo />
			</main>
		</div>
	)
}

export { Home }
