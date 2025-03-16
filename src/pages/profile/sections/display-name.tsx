import { toast } from 'sonner'
import { FC, JSX, memo, useState } from 'react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { updateDisplayName } from '../services/update-profile'
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
		const [isLoading, setIsLoading] = useState<boolean>(false)
		const [newName, setNewName] = useState<string | null>(displayName)

		const handleUpdateDisplayName = async () => {
			setIsLoading(true)

			if (!newName) {
				setIsLoading(false)

				return toast.error('Por favor, insira um nome de exibição.', {
					action: {
						label: 'Ok',
						onClick: () => {}
					}
				})
			}

			await updateDisplayName(newName)
				.then(() => {
					toast.success('Nome de exibição atualizado com sucesso.', {
						action: {
							label: 'Ok',
							onClick: () => {}
						}
					})
				})
				.catch((error: Error) => {
					toast.error('Erro ao atualizar o nome de exibição.', {
						description: error.message,
						action: {
							label: 'Ok',
							onClick: () => {}
						}
					})
				})
				.finally(() => {
					setIsLoading(false)
				})
		}

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
						name='new-name'
						defaultValue={newName || ''}
						placeholder={newName || 'Nome de exibição'}
						onChange={event => setNewName(event.target.value)}
						className='w-full max-w-sm'
					/>
				</CardContent>

				<CardFooter className='flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2'>
					<span className='text-muted-foreground text-sm font-medium'>
						Por favor, uso no máximo 32 caracteres.
					</span>

					<Button
						variant='outline'
						loading={isLoading}
						loadingText='Salvar'
						onClick={handleUpdateDisplayName}
						disabled={!newName || newName === displayName}
						className='w-full sm:w-auto'
					>
						Salvar
					</Button>
				</CardFooter>
			</Card>
		)
	}
)
DisplayNameSection.displayName = 'DisplayNameSection'

export { DisplayNameSection }
