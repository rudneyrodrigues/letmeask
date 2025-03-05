import { Route, Routes } from 'react-router'

import { Home } from '@/pages/home'
import { About } from '@/pages/about'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='about' element={<About />} />
		</Routes>
	)
}
