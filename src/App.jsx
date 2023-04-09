import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';


const App = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Header />
        <Outlet></Outlet>
    </div>
  );
};

export default App;