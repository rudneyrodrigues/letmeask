import { type FC, JSX, memo } from 'react'

import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'

const ButtonSignInGoogle: FC = memo((): JSX.Element => {
	const { loading, loginWithGoogle } = useAuth()

	return (
		<Button
			size='lg'
			leftIcon='google'
			loading={loading}
			loadingText='Entrando...'
			onClick={loginWithGoogle}
			className='bg-google text-google-foreground hover:bg-google/90 w-full cursor-pointer'
		>
			Crie sua sala com o Google
		</Button>
	)
})
ButtonSignInGoogle.displayName = 'ButtonSignInGoogle'

export { ButtonSignInGoogle }
