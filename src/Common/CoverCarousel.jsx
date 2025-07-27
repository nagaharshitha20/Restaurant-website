import React, { useRef } from 'react';
import Slider from 'react-slick';
import CoverPage1 from '../Coverpages/Coverpage1';
import CoverPage2 from '../Coverpages/Coverpage2';
import CoverPage3 from '../Coverpages/Coverpage3';
import CoverPage4 from '../Coverpages/Coverpage4';
import CoverPage5 from '../Coverpages/Coverpage5';
import CoverPage6 from '../Coverpages/CoverPage6';
import CoverPage7 from '../Coverpages/Coverpage7';

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
    <CoverPage1 key="1" />,
    <CoverPage2 key="2" />,
    <CoverPage3 key="3" />,
    <CoverPage4 key="4" />,
    <CoverPage5 key="5" />,
    <CoverPage6 key="6" />,
    <CoverPage7 key="7" />,
  ];

  return (
    <div
      style={{ width: '100%', overflow: 'hidden' ,}}
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
