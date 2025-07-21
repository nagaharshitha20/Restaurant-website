import * as React from 'react';
import CoverPage5 from './CoverPage5';
import About5 from './About5';
import Delicious from './Delicious';
import TrendingMenu from './TrendingMenu';
import Service5 from './Service5';
import Process from './Process';
import BlogSection from '../HomePage6/BlogSection';
import FooterGallery from '../Common/FooterGallery';
import Learn from '../HomePage6/Learn';
import CoverCarousel from '../Common/CoverCarousel';
import Delivery5 from './Delivery5';
const HomePage5=()=>{
      return (
    <div style={{ overflowX: 'hidden' }}>
     
      {/* <CoverPage5 /> */}
      <CoverCarousel/>
      <About5/>
      <Delicious/>
      <Delivery5/>
      <TrendingMenu/>
      <Service5/>
      <Process/>
      <Learn/>
      <BlogSection/>
      <FooterGallery/>
     
       
    </div>
  );
};

export default HomePage5;