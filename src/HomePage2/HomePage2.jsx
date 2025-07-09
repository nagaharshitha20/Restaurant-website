import * as React from 'react';
 import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../Common/CoverCarousel';
import FeatureSection from './FeatureSection';
import Menu from './Menu';
import DealOfWeek from './DealOfWeek';
import Experience from './Experience';

const HomePage2 = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <CoverPage2 /> */}
       <CoverCarousel />
      <FeatureSection />
      <Menu/>
      <DealOfWeek />
      <Experience />
      

    </div>
  );
};

export default HomePage2;
    