import React from 'react';
import Todos from '../components/ToDo';

const MainDashboard = (): JSX.Element => {

  return (
    <div className="max-w-7xl mx-auto px-8">
      <Todos />
    </div>
  );
};

export default MainDashboard;