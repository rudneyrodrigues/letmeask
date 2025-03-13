import { FC, JSX, memo } from 'react'

import { useAuth } from '@/hooks/use-auth'
import { Header } from './components/header'
import {
	LoadingPage,
	EmailSection,
	AvatarSection,
	DisplayNameSection,
	ToggleThemeSection,
	DeleteAccountSection
} from './sections'

const Profile: FC = memo((): JSX.Element => {
	const { user, loading } = useAuth()

	if (loading || !user) return <LoadingPage />

	return (
		<div className='flex min-h-svh flex-col'>
			<Header />

			<main className='flex flex-1 flex-col items-center justify-start px-4 py-8'>
				<div className='flex w-full max-w-3xl flex-col gap-6'>
					<section className='flex w-full flex-col items-center justify-center'>
						<h2 className='text-2xl font-bold'>Meu perfil</h2>
						<span className='text-muted-foreground text-base'>
							Aqui você pode ver e editar suas informações de perfil.
						</span>
					</section>

					<AvatarSection
						user={{
							displayName: user.displayName,
							photoURL: user.photoURL
						}}
					/>
					<DisplayNameSection displayName={user.displayName} />
					<EmailSection email={user.email} />

					<ToggleThemeSection />

					<DeleteAccountSection uid={user.uid} />
				</div>
			</main>
		</div>
	)
})
Profile.displayName = 'Profile'

export { Profile }
