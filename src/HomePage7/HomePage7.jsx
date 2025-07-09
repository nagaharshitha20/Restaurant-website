import * as React from 'react';
import CoverPage7 from './CoverPage7';
import TodayMenu from './TodayMenu';
import Pickup from './Pickup';
import ProductSection from './ProductSection';
import SpecialAndTestimonial from './SpecialAndTestimonial';


const HomePage7=()=>{
      return (
    <div style={{ overflowX: 'hidden' }}>
     
      {/* <CoverPage6 /> */}
     <CoverPage7/>
     <TodayMenu/>
     <Pickup/>
     <ProductSection/>
     <SpecialAndTestimonial/>
    </div>
  );
};

export default HomePage7;