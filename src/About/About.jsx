import * as React from 'react';
import CoverCarousel from '../Common/CoverCarousel';
import About1 from '../HomePage1/About1';
import About3 from '../HomePage3/About3';
import Review from '../HomePage1/Review';
import RecentNews from '../HomePage1/RecentNews';
import Menu from '../HomePage2/Menu';
import Follow from '../HomePage1/Follow';
import Experience from '../HomePage2/Experience';
import BestSellers from '../HomePage3/BestSellers';
import Quality from '../HomePage4/Quality';
import About5 from '../HomePage5/About5';
import Deal6 from '../HomePage6/Deal6';
import SpecialAndTestimonial from '../HomePage7/Testimonial';
import Testimonial from '../HomePage7/Testimonial';
import InstaFollow from '../Common/InstaFollow';
import FooterGallery from '../Common/FooterGallery';
const About = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
     
      {/* <CoverPage /> */}
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