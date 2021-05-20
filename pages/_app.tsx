import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import useAuthState from '../hooks/useAuthState';
import { UserContext } from '../store';

const App = ({ Component, pageProps }: AppProps) : JSX.Element => {
  const { user } = useAuthState();
  const state = {
    user
  };
  return (
  <UserContext.Provider value={state}>
    <Component {...pageProps} />
  </UserContext.Provider>
  );
};

export default App;