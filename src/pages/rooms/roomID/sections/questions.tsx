import { FC, JSX, memo } from 'react'

import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/use-auth'
import { RoomProps } from '@/config/types'
import { NoQuestions } from '@/components/assets'

type QuestionsProps = {
	room: RoomProps
}

const Questions: FC<QuestionsProps> = memo(
	({ room }: QuestionsProps): JSX.Element => {
		const { user } = useAuth()

		return (
			<section
				className={cn(
					'flex flex-1 flex-col items-center justify-center',
					user ? 'mt-0' : 'mt-16'
				)}
			>
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
			</section>
		)
	}
)
Questions.displayName = 'Questions'

export { Questions }
