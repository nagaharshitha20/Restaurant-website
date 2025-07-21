import * as React from 'react';
//  import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../Common/CoverCarousel';
import FeatureSection from '../HomePage2/FeatureSection';
// import Menu from './Menu';
import DiscoverMenu from '../HomePage1/DiscoverMenu';
import MenuSection from '../HomePage3/MenuSection';
import DealOfWeek from '../HomePage2/DealOfWeek';
// import Experience from './Experience';
import RecentNews from '../HomePage1/RecentNews';
import TodayMenu from '../HomePage7/TodayMenu';
import Pickup from '../HomePage7/Pickup';
import About3 from '../HomePage3/About3';
import PopularFood from '../HomePage4/PopularFood';
import Delivery5 from '../HomePage5/Delivery5';
import Kfc from '../HomePage4/Kfc';
import Service5 from '../HomePage5/Service5';
import FastFood from '../HomePage3/FastFood';
import FooterGallery from '../Common/FooterGallery';
const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <CoverPage2 /> */}
       <CoverCarousel />
   
      <FeatureSection />
          {/* <About3/> */}
      <MenuSection/>
      <FastFood/>
          <Delivery5/>
          {/* <Service5/> */}
           <Kfc/> 
      <DiscoverMenu/>
  
     

      <PopularFood/>
      
   <RecentNews/>
{/*       
      <Experience /> */}
      

    </div>
  );
};

export default Home;
    