import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import { UserContext } from '../../store';
import Auth from '../Auth';

const Signup = () : JSX.Element=> {
  const router = useRouter();
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
      <Auth isLogin={false} />
    </Layout>
  );
};

export default Signup;