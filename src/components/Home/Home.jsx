import * as React from 'react';
import CoverCarousel from '../../Common/CoverCarousel';
import FeatureSection from './FeatureSection';
import MenuSection from './MenuSection';
import FastFood from './FastFood';
import Delivery5 from './Delivery5';
import Kfc from './Kfc';
import DiscoverMenu from './DiscoverMenu';
import PopularFood from '../../Common/PopularFood';
import Services from './Services';
import RecentNews from '../../Common/RecentNews';
const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
       <CoverCarousel />
   <FeatureSection />
      <MenuSection/>
      <FastFood/>
          <Delivery5/>
           <Kfc/> 
      <DiscoverMenu/>
      <Services/>
  <PopularFood/>
      <RecentNews/>

    </div>
  );
};

export default Home;
    