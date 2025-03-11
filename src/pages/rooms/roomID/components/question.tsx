import { FC, JSX, memo } from 'react'

import { cn } from '@/lib/utils'
import { QuestionProps } from '@/config/types'
import { useIsMobile } from '@/hooks/use-mobile'
import { Separator } from '@/components/ui/separator'
import { ButtonIcon } from '@/components/ui/button-icon'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type IProps = {
	userIsCreator: boolean
	question: QuestionProps
}

const Question: FC<IProps> = memo(
	({ question, userIsCreator }: IProps): JSX.Element => {
		const isMobile = useIsMobile()

		return (
			<div className='w-full space-y-4 rounded-md border p-4'>
				<div>
					<p className='text-foreground text-base'>{question.question}</p>
				</div>

				<footer
					className={cn(
						'flex w-full justify-between gap-2',
						userIsCreator &&
							'flex-col items-start justify-center gap-1 md:flex-row md:items-center md:justify-between md:gap-2'
					)}
				>
					<div className='flex items-center gap-2'>
						<Avatar className='size-8'>
							<AvatarImage
								alt={question.author.name}
								src={String(question.author.avatar)}
							/>
							<AvatarFallback>
								{question.author.name
									.split(' ')
									.map(name => name[0])
									.slice(0, 2)
									.join('')}
							</AvatarFallback>
						</Avatar>
						<span className='text-muted-foreground text-sm'>
							{question.author.name}
						</span>
					</div>

					<div
						className={cn(
							'flex items-center',
							userIsCreator && 'w-full justify-between gap-2 md:w-auto md:gap-0'
						)}
					>
						{userIsCreator && (
							<div className='flex items-center gap-1'>
								<ButtonIcon
									size='sm'
									variant='ghost'
									icon='checkCircle'
									className='cursor-pointer'
								/>
								<ButtonIcon
									size='sm'
									variant='ghost'
									icon='chatCircle'
									className='cursor-pointer'
								/>
								<ButtonIcon
									size='sm'
									variant='ghost'
									icon='trashSimple'
									className='cursor-pointer'
								/>
							</div>
						)}

						{userIsCreator && !isMobile && (
							<Separator orientation='vertical' className='mx-2 h-4' />
						)}

						<ButtonIcon
							size='sm'
							icon='like'
							variant='ghost'
							className='cursor-pointer'
						/>
					</div>
				</footer>
			</div>
		)
	}
)
Question.displayName = 'Question'

export { Question }
