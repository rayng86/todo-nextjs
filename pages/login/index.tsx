import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import { UserContext } from '../../store';
import Auth from '../Auth';

const Login = () : JSX.Element=> {
  const router = useRouter()
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])
  if (user) {
    return <div>redirecting.</div>
  }
  return (
    <Layout>
      <Auth />
    </Layout>
  );
};

export default Login;