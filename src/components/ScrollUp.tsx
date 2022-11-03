import React, { useEffect, useState } from 'react';

const ScrollUp = () => {
  const [showTopButton, setshowTopButton] = useState(false);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setshowTopButton(true);
      } else {
        setshowTopButton(false);
      }
      return () => window.removeEventListener(`scroll`, goToTop);
    });
  }, []);
  return (
    <>
      {showTopButton && (
        <button onClick={goToTop} className='fixed bottom-5 right-0'>
          UP
        </button>
      )}
    </>
  );
};

export default ScrollUp;
