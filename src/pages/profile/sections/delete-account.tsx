import { FC, JSX, memo } from 'react'

import { DialogDeleteAccount } from '../components/dialog-delete-account'
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
					<DialogDeleteAccount uid={uid} />
				</CardFooter>
			</Card>
		)
	}
)
DeleteAccountSection.displayName = 'DeleteAccountSection'

export { DeleteAccountSection }
