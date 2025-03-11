import { FC, JSX, memo } from 'react'

import { cn } from '@/lib/utils'
import { ErrorQuestions } from './error'
import { useAuth } from '@/hooks/use-auth'
import { RoomProps } from '@/config/types'
import { LoaderQuestions } from './loader'
import { NoQuestions } from '@/components/assets'
import { Question } from '../../components/question'
import { useGetQuestions } from '@/hooks/swr/use-get-questions'

type QuestionsProps = {
	room: RoomProps
}

const Questions: FC<QuestionsProps> = memo(
	({ room }: QuestionsProps): JSX.Element => {
		const { user } = useAuth()
		const { error, isLoading, data } = useGetQuestions(room.uid)

		const userIsCreator = user && user.uid === room.createdBy

		if (isLoading || !data) {
			return <LoaderQuestions userIsCreator={userIsCreator} />
		}

		if (error) {
			return <ErrorQuestions />
		}

		return (
			<section
				className={cn(
					'flex flex-1 flex-col items-center',
					user ? 'mt-0' : 'mt-16',
					data.length > 0 ? 'justify-start' : 'justify-center'
				)}
			>
				{data.length > 0 ? (
					<div
						className={cn(
							'flex w-full flex-col gap-4',
							!userIsCreator && 'mt-10'
						)}
					>
						{data.map(question => {
							return (
								<Question
									key={question.id}
									question={question}
									userIsCreator={!!userIsCreator}
								/>
							)
						})}
					</div>
				) : (
					<div className='flex flex-col items-center justify-center'>
						<NoQuestions />
						<h3 className='mt-4 text-center text-lg font-bold text-zinc-950 dark:text-zinc-50'>
							Nenhuma pergunta por aqui...
						</h3>
						<span className='text-muted-foreground mt-1 w-full max-w-[284px] text-center text-sm'>
							{user
								? user.uid === room.createdBy
									? 'Envie o código desta sala para seus amigos e comece a responder perguntas!'
									: 'Faça o seu login e seja a primeira pessoa a fazer uma pergunta!'
								: 'Escreva sua pergunta e seja o primeiro a interagir com a sala!'}
						</span>
					</div>
				)}
			</section>
		)
	}
)
Questions.displayName = 'Questions'

export { Questions }
