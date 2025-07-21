import * as React from 'react';
import CoverPage7 from './CoverPage7';
import TodayMenu from './TodayMenu';
import Pickup from './Pickup';
import ProductSection from './ProductSection';
import SpecialAndTestimonial from './Testimonial';
import Specialoffer from './Specialoffer';


const HomePage7=()=>{
      return (
    <div style={{ overflowX: 'hidden' }}>
     
      {/* <CoverPage6 /> */}
     <CoverPage7/>
     <TodayMenu/>
     <Pickup/>
     <ProductSection/>
     <Specialoffer/>
     <SpecialAndTestimonial/>
    </div>
  );
};

export default HomePage7;