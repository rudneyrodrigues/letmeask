import './styles/globals.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router'
import { Toaster } from './components/ui/toaster'
import { ThemeProvider } from './providers/theme.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme='system' storageKey='letmeask-theme'>
			<BrowserRouter>
				<AppRoutes />
				<Toaster position='top-right' />
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
)
