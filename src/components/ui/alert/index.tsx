import { forwardRef, HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { variants } from './variants'

const Alert = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & VariantProps<typeof variants>
>(({ className, variant, ...props }, ref) => (
	<div
		ref={ref}
		role='alert'
		className={cn(variants({ variant }), className)}
		{...props}
	/>
))
Alert.displayName = 'Alert'

const AlertTitle = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cn(
			'mb-1 text-base leading-none font-bold tracking-tight',
			className
		)}
		{...props}
	/>
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef<
	HTMLParagraphElement,
	HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('text-sm [&_p]:leading-relaxed', className)}
		{...props}
	/>
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
