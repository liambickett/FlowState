import { ReactNode, useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

interface MenuProviderProps {
  children: ReactNode;
}

export default function MenuProvider({ children }: MenuProviderProps) {
  const router = useRouter();

  const { user, isLoading } = useUser();
  console.log('🚀 ~ MenuProvider ~ user:', user);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const activeTabClass = 'light-red semi-bold';

  return (
    <>
      <div className='menu '>
        <h1>
          FLOW
          <span className='light-red'>ST8</span>
        </h1>
        {!isLoading && user ? (
          <ul>
            <li
              className={router.pathname === '/dashboard' ? activeTabClass : ''}
            >
              <Link href='/dashboard'>Dashboard</Link>
            </li>
            <li
              className={
                router.pathname === '/taskmanager' ? activeTabClass : ''
              }
            >
              <Link href='/taskmanager'>Task Manager</Link>
            </li>
            <li
              className={router.pathname === '/calendar' ? activeTabClass : ''}
            >
              <Link href='/calendar'>Calendar</Link>
            </li>
            <li className='light-grey'>
              <Link href='/api/auth/logout'>Signout</Link>
            </li>
          </ul>
        ) : (
          <Link
            style={{ fontWeight: 600, fontSize: '18px' }}
            className='mid-red dm'
            href={'/api/auth/login'}
          >
            Sign In / Sign Up
          </Link>
        )}
      </div>
      {children}
    </>
  );
}
