import { FC, JSX, memo } from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardTitle,
	CardFooter,
	CardHeader,
	CardDescription
} from '@/components/ui/card'

type DeleteAccountSectionProps = {
	uid: string
}

const DeleteAccountSection: FC<DeleteAccountSectionProps> = memo(
	({ uid }: DeleteAccountSectionProps): JSX.Element => {
		console.log('Delete user account with uid:', uid)

		return (
			<Card className='border-destructive'>
				<CardHeader>
					<CardTitle>Deletar conta</CardTitle>
					<CardDescription>
						Remova permanentemente sua conta e seu conteúdo do Letmeask. Esta
						não é uma ação reversível, então continue com cautela.
					</CardDescription>
				</CardHeader>

				<CardFooter className='border-t-destructive bg-destructive/10 justify-end'>
					<Button variant='destructive' className='w-full sm:w-auto'>
						Deletar conta
					</Button>
				</CardFooter>
			</Card>
		)
	}
)
DeleteAccountSection.displayName = 'DeleteAccountSection'

export { DeleteAccountSection }
