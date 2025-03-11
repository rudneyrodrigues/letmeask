import { Link } from 'react-router'
import { FC, FormEvent, JSX, memo, useState } from 'react'

import { toast } from 'sonner'
import { useAuth } from '@/hooks/use-auth'
import { RoomProps } from '@/config/types'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { sendQuestion } from '../services/send-question'

type FormNewQuestionProps = {
	room: RoomProps
}

const FormNewQuestion: FC<FormNewQuestionProps> = memo(
	({ room }: FormNewQuestionProps): JSX.Element => {
		const { user, loginWithGoogle } = useAuth()
		const [question, setQuestion] = useState('')
		const [loading, setLoading] = useState(false)

		const handleSendQuestion = async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault()
			setLoading(true)

			if (!user) {
				return toast.error(
					'Você precisa estar logado para enviar uma pergunta.',
					{
						action: {
							label: 'Fazer login',
							onClick: () => loginWithGoogle()
						}
					}
				)
			}

			await sendQuestion({
				roomID: room.uid,
				question,
				author: {
					uid: user.uid,
					name: user.displayName || 'Usuário sem nome',
					avatar: user.photoURL ?? undefined
				}
			}).finally(() => {
				toast.success('Pergunta enviada com sucesso!', {
					action: {
						label: 'Ok',
						onClick: () => {}
					}
				})
			})

			setLoading(false)
			setQuestion('')
		}

		return (
			<section className='w-full'>
				{user ? (
					user.uid !== room.createdBy &&
					room.open && (
						<form onSubmit={handleSendQuestion} className='w-full space-y-2'>
							<Textarea
								name='question'
								value={question}
								aria-label='Pergunta'
								placeholder='O que você quer perguntar?'
								info={`${question.length}/500 caracteres`}
								disabled={!user || !room.open || user.uid === room.createdBy}
								onChange={e => {
									// Limita a quantidade de caracteres
									if (e.target.value.length <= 500) {
										setQuestion(e.target.value)
									}
								}}
								className='h-36 resize-none'
							/>

							<div className='flex items-center justify-end'>
								<Button
									type='submit'
									loading={loading}
									aria-label='Enviar pergunta'
									loadingText='Enviar pergunta'
									disabled={
										question.length <= 0 ||
										question.length > 500 ||
										!room.open ||
										loading
									}
								>
									Enviar pergunta
								</Button>
							</div>
						</form>
					)
				) : (
					<div className='rounded-md border border-dashed p-4'>
						<span className='text-muted-foreground text-sm'>
							Para enviar uma pergunta,{' '}
							<Link
								to='#'
								onClick={loginWithGoogle}
								className='text-primary cursor-pointer hover:underline hover:underline-offset-4'
							>
								faça seu login.
							</Link>
						</span>
					</div>
				)}
			</section>
		)
	}
)
FormNewQuestion.displayName = 'FormNewQuestion'

export { FormNewQuestion }
