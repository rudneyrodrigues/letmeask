import { Slot } from 'radix-ui'
import { forwardRef, memo } from 'react'
import { CircleNotch } from '@phosphor-icons/react'
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
							<CircleNotch size={20} weight='bold' className='animate-spin' />
							{loadingText && loadingText}
						</>
					) : (
						<Slot.Slottable>
							{LeftIcon && <LeftIcon size={24} weight='bold' />}

							{props.children}

							{RightIcon && <RightIcon size={24} weight='bold' />}
						</Slot.Slottable>
					)}
				</Comp>
			)
		}
	)
)
Button.displayName = 'Button'

export { Button }
