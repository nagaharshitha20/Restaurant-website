import * as React from 'react';
 import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../Common/CoverCarousel';
import FeatureSection from './FeatureSection';
import Menu from './Menu';
import DealOfWeek from './DealOfWeek';
import Experience from './Experience';
import RecentNews2 from './RecentNews2';

const HomePage2 = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <CoverPage2 /> */}
       <CoverCarousel />
      <FeatureSection />
      <Menu/>
      <DealOfWeek />
      <Experience />
      <RecentNews2/>
      

    </div>
  );
};

export default HomePage2;
    