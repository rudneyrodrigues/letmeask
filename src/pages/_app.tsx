import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import NextNProgress from "nextjs-progressbar";

import { AuthProvider } from '../contexts/AuthContext';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <NextNProgress />
      <GlobalStyle />
      <Toaster />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
