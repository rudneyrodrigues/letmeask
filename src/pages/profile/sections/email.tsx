import { FC, JSX, memo } from 'react'

import { Input } from '@/components/ui/input'
import {
	Card,
	CardTitle,
	CardFooter,
	CardHeader,
	CardContent,
	CardDescription
} from '@/components/ui/card'

type EmailSectionProps = {
	email: string | null
}

const EmailSection: FC<EmailSectionProps> = memo(
	({ email }: EmailSectionProps): JSX.Element => {
		return (
			<Card>
				<CardHeader>
					<CardTitle>E-mail</CardTitle>
					<CardDescription>
						Usado para fazer login e receber notificações.
					</CardDescription>
				</CardHeader>

				<CardContent>
					<strong className='sr-only text-sm font-medium'>
						Seu e-mail foi verificado com sucesso!
					</strong>
					<Input
						disabled
						icon='mail'
						placeholder={email || ''}
						defaultValue={email || ''}
						className='w-full max-w-sm'
					/>
				</CardContent>

				<CardFooter>
					<span className='text-muted-foreground text-sm font-medium'>
						Seu e-mail não pode ser alterado.
					</span>
				</CardFooter>
			</Card>
		)
	}
)
EmailSection.displayName = 'EmailSection'

export { EmailSection }
