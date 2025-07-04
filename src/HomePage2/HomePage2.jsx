import * as React from 'react';
 import CoverPage2 from './CoverPage2';
import FeatureSection from './FeatureSection';
import Menu from './Menu';
import DealOfWeek from './DealOfWeek';
import Experience from './Experience';

const HomePage2 = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <CoverPage2 />
      <FeatureSection />
      <Menu/>
      <DealOfWeek />
      <Experience />
      

    </div>
  );
};

export default HomePage2;
    