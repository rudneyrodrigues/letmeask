import { cva } from 'class-variance-authority'

export const variants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-outline disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow hover:bg-primary/90',
				outline:
					'border border-border bg-transparent shadow-sm hover:bg-primary hover:text-primary-foreground hover:border-primary',
				secondary:
					'bg-accent text-accent-foreground shadow-sm hover:bg-accent/80',
				ghost:
					'bg-transparent text-foreground shadow-none hover:bg-accent hover:text-accent-foreground',
				destructive:
					'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90'
			},
			size: {
				default: 'h-10 w-10 min-h-10 min-w-10',
				sm: 'h-8 w-8 min-h-8 min-w-8 rounded-md',
				lg: 'h-12 w-12 min-h-12 min-w-12 rounded-md'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)
