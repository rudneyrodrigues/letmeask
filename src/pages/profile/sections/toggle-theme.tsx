import { FC, JSX, memo } from 'react'

import { useTheme } from '@/hooks/use-theme'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardTitle,
	CardHeader,
	CardDescription,
	CardContent
} from '@/components/ui/card'

const ToggleThemeSection: FC = memo((): JSX.Element => {
	const { theme, setTheme } = useTheme()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Tema</CardTitle>
				<CardDescription>Escolha o tema que você mais gosta.</CardDescription>
			</CardHeader>

			<CardContent>
				<div className='flex w-full flex-col items-center gap-4 sm:flex-row sm:gap-0'>
					<Button
						size='lg'
						variant={theme === 'light' ? 'secondary' : 'ghost'}
						onClick={() => setTheme('light')}
						className='w-full border sm:rounded-r-none sm:border-r-0'
					>
						Claro
					</Button>

					<Button
						size='lg'
						variant={theme === 'dark' ? 'secondary' : 'ghost'}
						onClick={() => setTheme('dark')}
						className='w-full border sm:rounded-none'
					>
						Escuro
					</Button>

					<Button
						size='lg'
						variant={theme === 'system' ? 'secondary' : 'ghost'}
						onClick={() => setTheme('system')}
						className='w-full border sm:rounded-l-none sm:border-l-0'
					>
						Sistema
					</Button>
				</div>
			</CardContent>
		</Card>
	)
})
ToggleThemeSection.displayName = 'ToggleThemeSection'

export { ToggleThemeSection }
