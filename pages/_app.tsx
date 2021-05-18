import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import useAuthState from '../hooks/useAuthState';

function App({ Component, pageProps }: AppProps) {
  const { user } = useAuthState();
  return <Component {...pageProps} authUser={user} />;
}

export default App;