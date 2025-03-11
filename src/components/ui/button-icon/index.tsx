import { forwardRef, memo } from 'react'
import { IconWeight } from '@phosphor-icons/react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { variants } from './variants'
import { Icon, IconName } from '../icon'

export interface ButtonIconProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof variants> {
	icon: IconName
	loading?: boolean
	iconWeight?: IconWeight
}

const ButtonIcon = memo(
	forwardRef<HTMLButtonElement, ButtonIconProps>(
		(
			{
				icon,
				size,
				variant,
				className,
				loading = false,
				iconWeight = 'regular',
				...props
			},
			ref
		) => {
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
						<Icon.loading
							size={20}
							weight={iconWeight}
							className='animate-spin'
						/>
					) : (
						<IconComponent size={size === 'lg' ? 24 : 20} weight={iconWeight} />
					)}
				</button>
			)
		}
	)
)
ButtonIcon.displayName = 'ButtonIcon'

export { ButtonIcon }
