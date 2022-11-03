import { Link } from 'gatsby';
import React from 'react';
import ScrollUp from '../components/ScrollUp';
//@ts-ignore
import * as styles from './styles.css';

const Index = () => {
  return (
    <>
      <div className='my-10'></div>
      <Link
        to='/second/'
        className=' bg-red-400 text-white rounded-md px-4 py-6 block w-fit'
      >
        Go to second
      </Link>
      <div className='my-[1000px]'></div>
      <Link
        to='/second/'
        className=' bg-red-400 text-white rounded-md px-4 py-6 block w-fit my-20'
      >
        Go to second with visible UP button
      </Link>
    </>
  );
};

export default Index;
