import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";

import { GlobalStyle } from '../styles/global';

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NextNProgress />
      <GlobalStyle />
      <Toaster />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
