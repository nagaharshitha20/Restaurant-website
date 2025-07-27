import * as React from 'react';
import CoverCarousel from '../../Common/CoverCarousel';
import About1 from './About1';
import About3 from './About3';
import Review from './Review';
import Menu from './Menu';
import BestSellers from './BestSellers';
import About5 from '../../Common/About5';
import Quality from './Quality';
import Deal6 from '../../Common/Deal6';
import Testimonial from './Testimonial';
import Experience from './Experience';
import RecentNews from '../../Common/RecentNews';
import Follow from './Follow';
import FooterGallery from '../../Common/FooterGallery';
const About = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
     
    
      <CoverCarousel />

     <About1/>  
     <Review/>
      <About3/>
     <Menu/>
  <BestSellers/>
      <About5/>
      <Quality/>
         <Deal6/>
     <Testimonial/>
       <Experience/>
   
       <RecentNews/>
     <Follow/>
       <FooterGallery/>
    </div>
  );
};

export default About;