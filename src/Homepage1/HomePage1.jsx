import * as React from 'react';
// import CoverPage from './CoverPage';
import CoverCarousel from '../Common/CoverCarousel';
// import CoverPage2 from './CoverPage2';
import About1 from './About1';
import Bbq from './Bbq';
import DiscoverMenu from './DiscoverMenu';
import Review from './Review';

import RecentNews from './RecentNews';
import Follow from './Follow';
import Footer from '../Common/Footer';
const HomePage = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
     
      {/* <CoverPage /> */}
      <CoverCarousel />

     <About1/>  
       <Bbq/>
      <DiscoverMenu/>
    <Review/>
       <RecentNews/>
     <Follow/> 
       
    </div>
  );
};

export default HomePage;