import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { variants } from './variants'

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof variants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(variants({ variant }), className)} {...props} />
}

export { Badge }
