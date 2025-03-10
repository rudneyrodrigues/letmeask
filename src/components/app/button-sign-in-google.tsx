import { type FC, JSX, memo } from 'react'

import { cn } from '@/lib/utils'
import { useAuth } from '@/hooks/use-auth'
import { Button, ButtonProps } from '@/components/ui/button'

type ButtonSignInGoogleProps = ButtonProps & {
	title?: string
}

const ButtonSignInGoogle: FC<ButtonSignInGoogleProps> = memo(
	({
		title = 'Crie sua sala com o Google',
		className,
		...props
	}: ButtonSignInGoogleProps): JSX.Element => {
		const { loading, loginWithGoogle } = useAuth()

		return (
			<Button
				size='lg'
				leftIcon='google'
				loading={loading}
				loadingText='Entrando...'
				onClick={loginWithGoogle}
				className={cn(
					'bg-google text-google-foreground hover:bg-google/90 w-full cursor-pointer',
					className
				)}
				{...props}
			>
				{title}
			</Button>
		)
	}
)
ButtonSignInGoogle.displayName = 'ButtonSignInGoogle'

export { ButtonSignInGoogle }
