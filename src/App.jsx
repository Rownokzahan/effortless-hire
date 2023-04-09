import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';


const App = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
      <Header />
      <div className='mx-2 md:mx-10 my-10'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;