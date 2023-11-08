import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import Context from '@/components/Context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </SessionProvider>
  );
}

export default MyApp;
