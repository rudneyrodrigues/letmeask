import { FC, JSX, memo } from 'react'

import { DialogUpdateAvatar } from '@/components/app/dialog-update-avatar'
import {
	Card,
	CardTitle,
	CardFooter,
	CardHeader,
	CardDescription
} from '@/components/ui/card'

type AvatarSectionProps = {
	user: {
		photoURL: string | null
		displayName: string | null
	}
}

const AvatarSection: FC<AvatarSectionProps> = memo(
	({ user }: AvatarSectionProps): JSX.Element => {
		return (
			<Card className='w-full'>
				<CardHeader className='flex-col-reverse items-center justify-between gap-6 p-8 sm:flex-row sm:gap-2'>
					<div className='flex flex-col space-y-1.5'>
						<CardTitle>Avatar</CardTitle>
						<CardDescription>
							Este é seu avatar. Clique no avatar para carregar um personalizado
							de seus arquivos.
						</CardDescription>
					</div>

					<DialogUpdateAvatar user={user} />
				</CardHeader>

				<CardFooter>
					<span className='text-muted-foreground text-sm font-medium'>
						Um avatar é opcional, mas altamente recomendado
					</span>
				</CardFooter>
			</Card>
		)
	}
)
AvatarSection.displayName = 'AvatarSection'

export { AvatarSection }
