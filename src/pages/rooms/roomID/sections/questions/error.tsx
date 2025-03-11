import { FC, memo } from 'react'

import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/use-auth'
import { Icon } from '@/components/ui/icon'

const ErrorQuestions: FC = memo(() => {
	const { user } = useAuth()

	return (
		<section
			className={cn(
				'flex flex-1 flex-col items-center justify-center',
				user ? 'mt-0' : 'mt-16'
			)}
		>
			<div className='flex flex-col items-center justify-center'>
				<Icon.warning size={50} />

				<h3 className='mt-4 text-center text-lg font-bold text-zinc-950 dark:text-zinc-50'>
					Algo deu errado...
				</h3>

				<span className='text-muted-foreground mt-1 w-full max-w-[284px] text-center text-sm'>
					Não foi possível carregar as perguntas desta sala. Tente novamente
					mais tarde.
				</span>
			</div>
		</section>
	)
})
ErrorQuestions.displayName = 'ErrorQuestions'

export { ErrorQuestions }
