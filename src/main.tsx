import './styles/globals.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AppRoutes } from './routes'
import { BrowserRouter } from 'react-router'
import { Toaster } from './components/ui/toaster'
import { AuthProvider } from './providers/auth.tsx'
import { ThemeProvider } from './providers/theme.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider defaultTheme='system' storageKey='letmeask-theme'>
			<BrowserRouter>
				<AuthProvider>
					<AppRoutes />
					<Toaster position='top-right' />
				</AuthProvider>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
)
