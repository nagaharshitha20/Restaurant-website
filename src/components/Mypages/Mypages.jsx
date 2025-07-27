import * as React from 'react';
//  import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../../Common/CoverCarousel';
import DealOfWeek from './DealOfWeek';
import Process from './Process';
import Learn from '../../Common/Learn';
import Service5 from './Service5';
import About5 from '../../Common/About5';
import NewsletterSection from '../../Common/NewsletterSection';

const Mypages = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
       <CoverCarousel />
    <DealOfWeek />
  
    <Service5/>
    <Process/>
      <About5/>
   <Learn/>
   <NewsletterSection/>


    </div>
  );
};

export default Mypages;
    