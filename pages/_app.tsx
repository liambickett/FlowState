import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ThemeProvider from '@/lib/hocs/ThemeProvider';
import MenuProvider from '@/lib/hocs/MenuProvider';
import { Provider } from 'react-redux';
import store from '@/lib/store';
import DataProvider from '@/lib/hocs/DataProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProvider>
        <DataProvider>
          <ThemeProvider>
            <MenuProvider>
              <Component {...pageProps} />
            </MenuProvider>
          </ThemeProvider>
        </DataProvider>
      </UserProvider>
    </Provider>
  );
}
