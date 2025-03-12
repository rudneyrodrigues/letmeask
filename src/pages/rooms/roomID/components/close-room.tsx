import { FC, JSX, memo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'
import { updateRoom } from '../services/update-room'
import { ButtonIcon } from '@/components/ui/button-icon'
import {
	AlertDialog,
	AlertDialogTitle,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogTrigger,
	AlertDialogDescription
} from '@/components/ui/alert-dialog'

type CloseRoomProps = {
	roomId: string
}

const CloseRoom: FC<CloseRoomProps> = memo(
	({ roomId }: CloseRoomProps): JSX.Element => {
		const isMobile = useIsMobile()
		const [isOpen, setIsOpen] = useState(false)
		const [isClosing, setIsClosing] = useState(false)

		const handleDeleteRoom = async () => {
			setIsClosing(true)

			await updateRoom({ roomId, updates: { open: false } })

			setIsClosing(false)
			setIsOpen(false)
		}

		return (
			<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
				<AlertDialogTrigger asChild>
					{isMobile ? (
						<ButtonIcon
							icon='trashSimple'
							loading={isClosing}
							variant='destructive'
						/>
					) : (
						<Button
							loading={isClosing}
							variant='destructive'
							leftIcon='trashSimple'
							loadingText='Encerrar sala'
						>
							Encerrar sala
						</Button>
					)}
				</AlertDialogTrigger>

				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Encerrar sala</AlertDialogTitle>
						<AlertDialogDescription>
							Tem certeza que você deseja encerrar esta sala?
						</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter>
						<AlertDialogCancel disabled={isClosing}>Cancelar</AlertDialogCancel>
						<Button
							loading={isClosing}
							variant='destructive'
							onClick={handleDeleteRoom}
							loadingText='Sim, encerrar'
						>
							Sim, encerrar
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		)
	}
)
CloseRoom.displayName = 'CloseRoom'

export { CloseRoom }
