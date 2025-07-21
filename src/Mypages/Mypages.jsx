import * as React from 'react';
//  import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../Common/CoverCarousel';
import DealOfWeek from '../HomePage2/DealOfWeek';
import Process from '../HomePage5/Process';
import Learn from '../HomePage6/Learn';
import Service5 from '../HomePage5/Service5';
import About5 from '../HomePage5/About5';

const Mypages = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <CoverPage2 /> */}
       <CoverCarousel />
    <DealOfWeek />
    <Service5/>
    <Process/>
   <Learn/>


    </div>
  );
};

export default Mypages;
    