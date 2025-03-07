import { forwardRef, memo } from 'react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { variants } from './variants'
import { Icon, IconName } from '../icon'

export interface ButtonIconProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof variants> {
	icon: IconName
	loading?: boolean
}

const ButtonIcon = memo(
	forwardRef<HTMLButtonElement, ButtonIconProps>(
		({ icon, size, variant, className, loading = false, ...props }, ref) => {
			const IconComponent = Icon[icon]

			return (
				<button
					ref={ref}
					disabled={loading || props.disabled}
					aria-disabled={loading || props.disabled}
					className={cn(variants({ variant, size, className }))}
					{...props}
				>
					{loading ? (
						<Icon.loading size={20} weight='bold' className='animate-spin' />
					) : (
						<IconComponent size={size === 'lg' ? 24 : 20} />
					)}
				</button>
			)
		}
	)
)
ButtonIcon.displayName = 'ButtonIcon'

export { ButtonIcon }
