import * as React from 'react';
//  import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../Common/CoverCarousel';
import Pickup from '../HomePage7/Pickup';
import MyMap from './MyMap';
import RecentNews2 from '../HomePage2/RecentNews2';
import RecentNews from '../HomePage1/RecentNews';

const Contact= () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <CoverPage2 /> */}
       <CoverCarousel />

      <Pickup/>
      <MyMap/>
        <RecentNews2/>
{/*       
      <Experience /> */}
      

    </div>
  );
};

export default Contact;
    