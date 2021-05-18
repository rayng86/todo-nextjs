import React from 'react';
import PermissionWrapper from '../components/PermissionWrapper';
import { AuthUserType } from '../types';
import MainDashboard from './MainDashboard';


const IndexPage = ({ authUser } : AuthUserType) : JSX.Element => {
  return <PermissionWrapper authUser={authUser}><MainDashboard /></PermissionWrapper>;
}

export default IndexPage;
