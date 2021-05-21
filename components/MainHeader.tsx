import Link from 'next/link';
import React, { useContext } from 'react';
import { UserContext } from '../store';
import { supabase } from '../utils/supabaseClient';

const NotLoggedIn = () => (
  <div className="md:block">
  <div className="ml-10 flex items-baseline space-x-4">
    <Link href="/signup">
      <a className="text-white hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        Register
      </a>
    </Link>
    <Link href="/login">
      <a className="text-white hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        Sign In
      </a>
    </Link>
  </div>
</div>
)

const LoggedIn = () => (
  <div className="md:block">
    <div className="ml-10 flex items-baseline space-x-4">
      <Link href="/#">
        <a
          className="text-white hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          onClick={() => {
            supabase.auth.signOut();
          }}
        >
          Log out
        </a>
      </Link>
    </div>
  </div>
);

const MainHeader = () : JSX.Element=> {
  const { user } = useContext(UserContext);
  return (
    <header className="pb-7">
      <div>
        <nav className="bg-purple-500 dark:bg-gray-800 shadow text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className="w-full justify-between flex items-center">
                <Link href="/">
                  <a className="flex-shrink-0">Simple To Dos</a>
                </Link>
                {user ? <LoggedIn /> : <NotLoggedIn />}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;