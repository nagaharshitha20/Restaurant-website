import React, { useRef } from 'react';
import Slider from 'react-slick';
import CoverPage2 from '../HomePage2/CoverPage2';
import CoverPage4 from '../HomePage4/CoverPage4';
import CoverPage5 from '../HomePage5/CoverPage5';
import CoverPage6 from '../HomePage6/CoverPage6';
import CoverPage from '../HomePage1/CoverPage';
import CoverPage3 from '../HomePage3/CoverPage3';

const CoverCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const handleInteraction = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const pages = [
    <CoverPage key="1" />,
    <CoverPage2 key="2" />,
    <CoverPage3 key="3" />,
    <CoverPage4 key="4" />,
    <CoverPage5 key="5" />,
    <CoverPage6 key="6" />,
  ];

  return (
    <div
      style={{ width: '100%', overflow: 'hidden' }}
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
      onFocus={handleInteraction}
    >
      <Slider ref={sliderRef} {...settings}>
        {pages.map((page) => (
          <div key={page.key}>{page}</div>
        ))}
      </Slider>
    </div>
  );
};

export default CoverCarousel;
