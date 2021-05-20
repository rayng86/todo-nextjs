import { useRouter } from 'next/router';
import React, { ReactNode, useContext, useEffect } from 'react';
import { UserContext } from '../store';
import Layout from './Layout';


type PermissionWrapperProps = {
  children: ReactNode,
  redirectUrl?: string
};

const PermissionWrapper = ({ redirectUrl='/login', children } : PermissionWrapperProps): JSX.Element=> {
  const router = useRouter();
  const {user} = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      router.push(redirectUrl);
    }
  }, [user])
  if (!user) {
    return <div>redirecting.</div>
  }
  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default PermissionWrapper;