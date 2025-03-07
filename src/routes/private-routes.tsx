import { FC, JSX } from 'react'
import { parseCookies } from 'nookies'
import { Navigate, Outlet } from 'react-router'

const PrivateRoutes: FC = (): JSX.Element => {
	const cookies = parseCookies()

	if (!cookies['@user.uid']) {
		return <Navigate to='/' />
	}

	return <Outlet />
}
PrivateRoutes.displayName = 'PrivateRoutes'

export { PrivateRoutes }
