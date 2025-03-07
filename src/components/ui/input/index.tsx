import { ComponentProps, forwardRef } from 'react'

import { cn } from '@/lib/utils'
import { Icon, IconName } from '../icon'

interface InputProps extends ComponentProps<'input'> {
	name: string
	icon?: IconName
	prefix?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, name, icon, prefix, className, ...props }, ref) => {
		const IconComp = icon && Icon[icon]

		return (
			<div
				className={cn(
					'border-border has-focus-visible:outline-outline has-focus:bg-muted relative flex h-10 w-full items-center rounded-md border p-0 text-white has-focus-visible:outline-2 has-focus-visible:outline-offset-2',
					className
				)}
			>
				{prefix ? (
					<label
						htmlFor={name}
						className='text-foreground pl-3 text-base font-medium'
					>
						{prefix}
					</label>
				) : (
					IconComp && (
						<label
							htmlFor={name}
							className='text-muted-foreground flex h-full items-center justify-center p-3'
						>
							<IconComp size={18} />
						</label>
					)
				)}

				<input
					id={name}
					ref={ref}
					name={name}
					type={type}
					className={cn(
						'file:text-foreground placeholder:text-muted-foreground h-10 w-full flex-1 px-3 text-base shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
						icon && 'pl-0',
						prefix && 'pl-0'
					)}
					{...props}
				/>
			</div>
		)
	}
)
Input.displayName = 'Input'

export { Input }
