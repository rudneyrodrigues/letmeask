import { FC, JSX, memo, useState } from 'react'

import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
	Dialog,
	DialogTitle,
	DialogClose,
	DialogHeader,
	DialogFooter,
	DialogContent,
	DialogTrigger,
	DialogDescription
} from '../ui/dialog'

type DialogUpdateAvatarProps = {
	user: {
		photoURL: string | null
		displayName: string | null
	}
}

const DialogUpdateAvatar: FC<DialogUpdateAvatarProps> = memo(
	({ user }: DialogUpdateAvatarProps): JSX.Element => {
		const [avatar, setAvatar] = useState<string | File | null>(user.photoURL)

		const updateAvatar = async () => {
			console.log('Avatar updated')
		}

		return (
			<Dialog>
				<DialogTrigger asChild>
					<Avatar className='size-16 cursor-pointer transition-opacity hover:opacity-80'>
						<AvatarImage
							src={String(user.photoURL)}
							alt={String(user.displayName)}
							className='size-16'
						/>
						<AvatarFallback>
							{String(user.displayName)
								.split(' ')
								.map(name => name[0])
								.slice(0, 2)
								.join('')}
						</AvatarFallback>
					</Avatar>
				</DialogTrigger>

				<DialogContent>
					<DialogHeader>
						<DialogTitle>Atualizar avatar</DialogTitle>
						<DialogDescription>
							Clique na imagem para escolher um arquivo
						</DialogDescription>
					</DialogHeader>

					<div className='w-full rounded-md border border-dashed'>
						<label
							htmlFor='avatar'
							className='flex cursor-pointer flex-col p-4'
						>
							<img
								src={
									avatar instanceof File
										? URL.createObjectURL(avatar)
										: String(user.photoURL)
								}
								alt={String(user.displayName)}
								className='cover mx-auto size-80 h-full max-h-80 w-full max-w-80 rounded-md'
							/>
							<Input
								type='file'
								name='avatar'
								accept='image/*'
								placeholder='Escolha um arquivo'
								onChange={e => setAvatar(e.target.files?.[0] ?? null)}
								className='hidden w-full'
							/>
						</label>
					</div>

					<DialogFooter>
						<DialogClose asChild>
							<Button type='button' variant='ghost'>
								Cancelar
							</Button>
						</DialogClose>

						<Button type='button' onClick={updateAvatar}>
							Salvar
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		)
	}
)
DialogUpdateAvatar.displayName = 'DialogUpdateAvatar'

export { DialogUpdateAvatar }
