import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { AuthUserType } from '../../types';
import Auth from '../Auth';

const Login = ({ authUser } : AuthUserType) : JSX.Element=> {
  const router = useRouter()
  useEffect(() => {
    if (authUser) {
      router.push('/')
    }
  }, [authUser])
  if (authUser) {
    return <div>redirecting.</div>
  }
  return (
    <Layout authUser={authUser}>
      <Auth />
    </Layout>
  );
};

export default Login;