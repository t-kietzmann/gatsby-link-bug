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
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setshowTopButton(true);
      } else {
        setshowTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener(`scroll`, handleScroll);
  }, []);
  return (
    <>
      {showTopButton && (
        <span onClick={goToTop} className='fixed bottom-5 right-0 bg-red-400'>
          UP2
        </span>
      )}
    </>
  );
};

export default ScrollUp;
