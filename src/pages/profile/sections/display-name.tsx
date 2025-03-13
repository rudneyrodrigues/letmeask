import { FC, JSX, memo } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardTitle,
	CardFooter,
	CardHeader,
	CardContent,
	CardDescription
} from '@/components/ui/card'

type DisplayNameSectionProps = {
	displayName: string | null
}

const DisplayNameSection: FC<DisplayNameSectionProps> = memo(
	({ displayName }: DisplayNameSectionProps): JSX.Element => {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Nome de exibição</CardTitle>
					<CardDescription>
						Insira seu nome completo ou um nome de exibição com o qual você se
						sinta confortável.
					</CardDescription>
				</CardHeader>

				<CardContent>
					<Input
						icon='user'
						name='display-name'
						defaultValue={displayName || ''}
						placeholder={displayName || 'Nome de exibição'}
						className='w-full max-w-sm'
					/>
				</CardContent>

				<CardFooter className='flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2'>
					<span className='text-muted-foreground text-sm font-medium'>
						Por favor, uso no máximo 32 caracteres.
					</span>

					<Button variant='outline' className='w-full sm:w-auto'>
						Salvar
					</Button>
				</CardFooter>
			</Card>
		)
	}
)
DisplayNameSection.displayName = 'DisplayNameSection'

export { DisplayNameSection }
