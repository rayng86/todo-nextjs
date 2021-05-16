import Link from 'next/link';
import React from 'react';

const MainHeader = () : JSX.Element=> {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;