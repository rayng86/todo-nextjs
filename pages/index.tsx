import React from 'react';
import PermissionWrapper from '../components/PermissionWrapper';
import MainDashboard from './MainDashboard';


const IndexPage = () : JSX.Element => {
  return <PermissionWrapper><MainDashboard /></PermissionWrapper>;
}

export default IndexPage;
