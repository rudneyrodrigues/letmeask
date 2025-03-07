import { Route, Routes } from 'react-router'

import { Home } from '@/pages/home'
import { About } from '@/pages/about'
import { Rooms, RoomNew } from '@/pages/rooms'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />

			<Route path='about' element={<About />} />

			<Route path='rooms'>
				<Route index element={<Rooms />} />
				<Route path='new' element={<RoomNew />} />
			</Route>
		</Routes>
	)
}
