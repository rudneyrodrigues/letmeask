import { cva } from 'class-variance-authority'

export const variants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-outline disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
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
				default: 'h-10 px-4 py-2',
				sm: 'h-8 rounded-md px-3 text-xs',
				lg: 'h-12 rounded-md px-8'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)
