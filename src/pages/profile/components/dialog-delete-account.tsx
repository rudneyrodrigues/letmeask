import { toast } from 'sonner'
import { FC, memo, useState } from 'react'
import { deleteUser } from 'firebase/auth'

import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { deleteRooms } from '../services/delete-rooms'
import {
	AlertDialog,
	AlertDialogTitle,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogCancel,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogDescription
} from '@/components/ui/alert-dialog'
import { useNavigate } from 'react-router'

type DialogDeleteAccountProps = {
	uid: string
}

const DialogDeleteAccount: FC<DialogDeleteAccountProps> = memo(
	({ uid }: DialogDeleteAccountProps) => {
		const navigate = useNavigate()
		const { user, logout } = useAuth()
		const [open, setOpen] = useState(false)
		const [loading, setLoading] = useState(false)

		const deleteUserAccount = async () => {
			setLoading(true)

			if (user) {
				try {
					await deleteRooms(uid)

					await deleteUser(user)

					await logout()

					toast.success('Conta deletada com sucesso', {
						description: 'Esperamos que você volte em breve',
						action: {
							label: 'Ok',
							onClick: () => {}
						}
					})

					navigate('/')
				} catch (error) {
					console.error(error)
					toast.error('Erro ao deletar conta', {
						description: 'Tente novamente mais tarde',
						action: {
							label: 'Ok',
							onClick: () => {}
						}
					})
				}
			}

			setOpen(false)
			setLoading(false)
		}

		return (
			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogTrigger asChild>
					<Button variant='destructive' className='w-full sm:w-auto'>
						Deletar conta
					</Button>
				</AlertDialogTrigger>

				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Deletar conta</AlertDialogTitle>
						<AlertDialogDescription>
							Remova permanentemente sua conta e seu conteúdo do Letmeask. Esta
							não é uma ação reversível, então continue com cautela.
						</AlertDialogDescription>
					</AlertDialogHeader>

					<AlertDialogFooter>
						<AlertDialogCancel>Cancelar</AlertDialogCancel>
						<Button
							loading={loading}
							variant='destructive'
							loadingText='Deletar'
							onClick={deleteUserAccount}
						>
							Deletar
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		)
	}
)

export { DialogDeleteAccount }
