import { FC, JSX } from 'react'

import { Logo } from '@/components/assets/logo'
import { Button } from '@/components/ui/button'

const About: FC = (): JSX.Element => {
	return (
		<div className='flex min-h-svh flex-col'>
			<main className='flex flex-1 flex-col-reverse items-center justify-center gap-4'>
				<Button>Acessar plataforma</Button>

				<h2>About Page</h2>

				<Logo />
			</main>
		</div>
	)
}

export { About }
