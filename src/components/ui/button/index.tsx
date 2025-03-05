import { Slot } from 'radix-ui'
import { forwardRef, memo } from 'react'
import { LoaderCircleIcon } from 'lucide-react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { variants } from './variants'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof variants> {
	asChild?: boolean
	loading?: boolean
	loadingText?: string
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
				...props
			},
			ref
		) => {
			const Comp: React.ElementType = asChild ? Slot.Root : 'button'

			return (
				<Comp
					ref={ref}
					className={cn(variants({ variant, size, className }))}
					{...props}
				>
					{loading && (
						<LoaderCircleIcon className='h-5 min-h-5 w-5 min-w-5 animate-spin' />
					)}

					{loading ? (
						loadingText
					) : (
						<Slot.Slottable>{props.children}</Slot.Slottable>
					)}
				</Comp>
			)
		}
	)
)
Button.displayName = 'Button'

export { Button }
