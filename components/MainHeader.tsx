import Link from 'next/link';
import React from 'react';

const MainHeader = () : JSX.Element=> {
  return (
    <header>
      <div>
        <nav className="bg-white dark:bg-gray-800  shadow ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className="w-full justify-between flex items-center">
                <a className="flex-shrink-0" href="/">
                  My Project
                </a>
                <div className="md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/#">
                      <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Register
                      </a>
                    </Link>
                    <Link href="/#">
                      <a className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Sign In
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;