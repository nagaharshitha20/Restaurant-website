import * as React from 'react';
import CoverPage3 from './CoverPage3';
import About3 from './About3';
import MenuSection from './MenuSection';
import Services from './Services';
import BestSellers from './BestSellers';
import CoverCarousel from '../Common/CoverCarousel';


const HomePage3 = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
     {/* <CoverPage3/> */}
     <CoverCarousel/>
     <About3/>
      <MenuSection/>
      <Services/>
      <BestSellers/>
    </div>
  );
};

export default HomePage3;