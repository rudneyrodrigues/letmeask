import { FC, JSX, useState } from 'react'

import { Button } from '@/components/ui/button'
import { ButtonIcon } from '@/components/ui/button-icon'
import { deleteQuestion } from '../../services/delete-question'
import {
	AlertDialog,
	AlertDialogTitle,
	AlertDialogCancel,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogDescription
} from '@/components/ui/alert-dialog'

type TrashButtonProps = {
	roomId: string
	roomOpen: boolean
	questionId: string
}

const TrashButton: FC<TrashButtonProps> = ({
	roomId,
	roomOpen,
	questionId
}: TrashButtonProps): JSX.Element => {
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const handleDelete = async () => {
		setLoading(true)

		await deleteQuestion(roomId, questionId)

		setLoading(false)
		setOpen(false)
	}

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>
				<ButtonIcon
					size='sm'
					variant='ghost'
					icon='trashSimple'
					disabled={!roomOpen}
					className='cursor-pointer'
				/>
			</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Deletar pergunta</AlertDialogTitle>
					<AlertDialogDescription>
						Tem certeza que deseja deletar essa pergunta?
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<Button
						loading={loading}
						onClick={handleDelete}
						loadingText='Continuar'
					>
						Continuar
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
TrashButton.displayName = 'TrashButton'

export { TrashButton }
