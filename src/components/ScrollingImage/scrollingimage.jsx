import React, { useState, useEffect } from 'react';

const ScrollingImage = () => {
  const imageUrls = [
    '/img/header-image-1.png',
    '/img/header-image-2.png',
    '/img/header-image-3.png',
    '/img/header-image-4.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3100);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div className="img-header">
      <img src={imageUrls[currentImageIndex]} alt="" />
    </div>
  );
};

export default ScrollingImage;
