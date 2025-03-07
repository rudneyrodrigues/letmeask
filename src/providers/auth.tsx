import { toast } from 'sonner'
import { destroyCookie, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'
import {
	User,
	signOut,
	signInWithPopup,
	onAuthStateChanged,
	GoogleAuthProvider
} from 'firebase/auth'

import { auth } from '@/services/firebase'

interface AuthProviderProps {
	children: ReactNode
}

export interface AuthContextData {
	loading: boolean
	user: User | null
	logout: () => Promise<void>
	loginWithGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [loading, setLoading] = useState(false)
	const [user, setUser] = useState<User | null>(null)

	const loginWithGoogle = async () => {
		setLoading(true)

		const provider = new GoogleAuthProvider()

		await signInWithPopup(auth, provider)
			.then(async credentials => {
				const user = credentials.user

				if (!user) {
					toast.error('Falha ao autenticar com o Google', {
						description: 'Tente novamente mais tarde',
						action: {
							label: 'Ok',
							onClick: () => {}
						}
					})
					return
				}

				setUser(user)

				setCookie(null, '@user.uid', user.uid, {
					path: '/',
					maxAge: 60 * 60 * 24, // 1 day in seconds
					secure: import.meta.env.NODE_ENV === 'production'
				})
			})
			.catch(error => {
				console.log(error)

				toast.error('Falha ao autenticar com o Google', {
					description: 'Tente novamente mais tarde',
					action: {
						label: 'Ok',
						onClick: () => {}
					}
				})
			})
			.finally(() => {
				setLoading(false)
			})
	}

	const logout = async () => {
		setLoading(true)

		try {
			await signOut(auth).then(() => {
				setUser(null)

				destroyCookie(null, '@user.uid', {
					path: '/'
				})
			})
		} catch (error) {
			console.log(error)

			toast.error('Erro ao fazer o logout', {
				description: 'Tente novamente mais tarde',
				action: {
					label: 'Ok',
					onClick: () => {}
				}
			})
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				setUser(user)

				setCookie(null, '@user.uid', user.uid, {
					path: '/',
					maxAge: 60 * 60 * 24, // 1 day in seconds
					secure: import.meta.env.NODE_ENV === 'production'
				})
			} else {
				setUser(null)

				destroyCookie(null, '@user.uid', {
					path: '/'
				})
			}
		})

		return () => unsubscribe()
	}, [])

	return (
		<AuthContext.Provider value={{ user, loading, logout, loginWithGoogle }}>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider, AuthContext }
