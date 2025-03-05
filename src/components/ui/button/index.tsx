import { Slot } from 'radix-ui'
import { forwardRef, memo } from 'react'
import { LoaderCircleIcon } from 'lucide-react'
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
					{loading ? (
						<>
							<LoaderCircleIcon className='h-5 min-h-5 w-5 min-w-5 animate-spin' />
							{loadingText && loadingText}
						</>
					) : (
						<Slot.Slottable>
							{LeftIcon && <LeftIcon />}

							{props.children}

							{RightIcon && <RightIcon />}
						</Slot.Slottable>
					)}
				</Comp>
			)
		}
	)
)
Button.displayName = 'Button'

export { Button }
