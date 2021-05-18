import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { AuthUserType } from '../types';
import Layout from './Layout';


type PermissionWrapperProps = {
  children: ReactNode,
  redirectUrl?: string
} & AuthUserType;

const PermissionWrapper = ({ redirectUrl='/login', children, authUser } : PermissionWrapperProps): JSX.Element=> {
  const router = useRouter()
  useEffect(() => {
    if (!authUser) {
      router.push(redirectUrl);
    }
  }, [authUser])
  if (!authUser) {
    return <div>redirecting.</div>
  }
  return (
    <Layout authUser={authUser}>
      {children}
    </Layout>
  );
};

export default PermissionWrapper;