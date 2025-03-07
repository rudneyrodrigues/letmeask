import { Slot } from 'radix-ui'
import { forwardRef, memo } from 'react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { variants } from './variants'
import { Icon, IconName } from '../icon'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof variants> {
	asChild?: boolean
	loading?: boolean
	loadingText?: string
	leftIcon?: IconName
	rightIcon?: IconName
}

const Button = memo(
	forwardRef<HTMLButtonElement, ButtonProps>(
		(
			{
				size,
				variant,
				className,
				loadingText,
				loading = false,
				asChild = false,
				leftIcon,
				rightIcon,
				...props
			},
			ref
		) => {
			const LeftIcon = leftIcon && Icon[leftIcon]
			const RightIcon = rightIcon && Icon[rightIcon]
			const Comp: React.ElementType = asChild ? Slot.Root : 'button'

			return (
				<Comp
					ref={ref}
					disabled={loading || props.disabled}
					aria-disabled={loading || props.disabled}
					className={cn(variants({ variant, size, className }))}
					{...props}
				>
					{!loading && LeftIcon && <LeftIcon size={24} />}

					{loading ? (
						<Slot.Slottable>
							<div className='flex items-center justify-center gap-2'>
								<Icon.loading
									weight='bold'
									size={size === 'lg' ? 24 : 20}
									className='animate-spin'
								/>
								<span className='text-foreground inline-flex'>
									{loadingText && loadingText}
								</span>
							</div>
						</Slot.Slottable>
					) : (
						<Slot.Slottable>{props.children}</Slot.Slottable>
					)}

					{!loading && RightIcon && <RightIcon />}
				</Comp>
			)
		}
	)
)
Button.displayName = 'Button'

export { Button }
