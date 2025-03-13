import { Route, Routes } from 'react-router'

import { Home } from '@/pages/home'
import { About } from '@/pages/about'
import { Profile } from '@/pages/profile'
import { PrivateRoutes } from './private-routes'
import { Rooms, RoomID, RoomNew } from '@/pages/rooms'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />

			<Route path='about' element={<About />} />

			<Route path='rooms'>
				<Route element={<PrivateRoutes />}>
					<Route index element={<Rooms />} />
					<Route path='new' element={<RoomNew />} />
				</Route>

				<Route path=':roomID' element={<RoomID />} />
			</Route>

			<Route path='profile'>
				<Route element={<PrivateRoutes />}>
					<Route index element={<Profile />} />
				</Route>
			</Route>
		</Routes>
	)
}
