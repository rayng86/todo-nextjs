import React, { ReactNode } from 'react';
import Head from 'next/head';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'My Project' }: Props) : JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainHeader />
    {children}
    <MainFooter />
  </div>
)

export default Layout
