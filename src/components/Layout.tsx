import React from 'react';
import ScrollUp from './ScrollUp';

const Layout = ({ children }: any) => {
  return (
    <div className='relative'>
      <ScrollUp />
      <div className='mx-auto flex h-screen flex-col justify-between'>
        <div className='fixed z-50 w-full bg-orange-400'>HEADER</div>

        <div className='mt-40 flex-grow '>{children}</div>

        <div className='bg-orange-400'>FOOTER</div>
      </div>
    </div>
  );
};

export default Layout;
