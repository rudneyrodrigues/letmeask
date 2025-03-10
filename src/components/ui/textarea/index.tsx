import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/utils'

type TextareaProps = ComponentProps<'textarea'> & {
	info?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ name, info, className, ...props }, ref) => {
		return (
			<div className='flex w-full flex-col gap-2'>
				<textarea
					ref={ref}
					id={name}
					name={name}
					className={cn(
						'border-input placeholder:text-muted-foreground focus-visible:outline-outline flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base text-zinc-950 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:text-zinc-50',
						className
					)}
					{...props}
				/>

				{info && <span className='text-muted-foreground text-xs'>{info}</span>}
			</div>
		)
	}
)
Textarea.displayName = 'Textarea'

export { Textarea }
