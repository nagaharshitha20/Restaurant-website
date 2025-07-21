import * as React from 'react';
import CoverPage3 from './CoverPage3';
import About3 from './About3';
import MenuSection from './MenuSection';
import Services from './Services';
import BestSellers from './BestSellers';
import CoverCarousel from '../Common/CoverCarousel';
import WeeklySpecial from './WeeklySpecial';
import InstaFollow from '../Common/InstaFollow';
import FastFood from './FastFood';


const HomePage3 = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
     {/* <CoverPage3/> */}
     <CoverCarousel/>
     <About3/>
      <MenuSection/>
      {/* <FastFood/> */}
      <Services/>
      <BestSellers/>
      <WeeklySpecial/>
      <InstaFollow/>
    </div>
  );
};

export default HomePage3;