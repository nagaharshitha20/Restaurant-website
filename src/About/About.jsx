import * as React from 'react';
import CoverCarousel from '../Common/CoverCarousel';
import About1 from '../HomePage1/About1';
import Review from '../HomePage1/Review';
import RecentNews from '../HomePage1/RecentNews';
import Follow from '../HomePage1/Follow';
const About = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
     
      {/* <CoverPage /> */}
      <CoverCarousel />

     <About1/>  
       {/* <Bbq/>
      <DiscoverMenu/> */}
    <Review/>
       <RecentNews/>
     <Follow/> 
       
    </div>
  );
};

export default About;