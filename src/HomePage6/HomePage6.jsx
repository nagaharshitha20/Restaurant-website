import * as React from 'react';
import CoverPage6 from './CoverPage6';
import Learn from './Learn';
import Products from './Products';
import Deal6 from './Deal6';
import BlogSection from './BlogSection';
import NewsletterSection from './NewsletterSection';
import FooterGallery from '../Common/FooterGallery';
import InstaFollow from '../Common/InstaFollow';
import CoverCarousel from '../Common/CoverCarousel';

const HomePage6=()=>{
      return (
    <div style={{ overflowX: 'hidden' }}>
     
      {/* <CoverPage6 /> */}
      <CoverCarousel/>
      <Learn/>
        <Products/>
        <Deal6/>
        <BlogSection/>
         <InstaFollow/>
      <NewsletterSection/>
      <FooterGallery/>
      
     
       
    </div>
  );
};

export default HomePage6;