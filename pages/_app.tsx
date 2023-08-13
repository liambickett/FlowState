import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ThemeProvider from '@/lib/hocs/ThemeProvider';
import MenuProvider from '@/lib/hocs/MenuProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider>
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
