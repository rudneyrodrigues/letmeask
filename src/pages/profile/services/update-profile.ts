import { updateProfile } from 'firebase/auth'

import { auth } from '@/services/firebase'

export const updateDisplayName = async (displayName: string) => {
	const { currentUser } = auth

	if (!currentUser) {
		throw new Error('User not found')
	}

	if (currentUser.displayName === displayName) {
		return
	}

	await updateProfile(currentUser, { displayName }).catch((error: Error) => {
		throw new Error(error.message)
	})
}
