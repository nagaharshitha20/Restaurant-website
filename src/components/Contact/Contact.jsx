import * as React from 'react';
//  import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../../Common/CoverCarousel';
import Pickup from './Pickup';
import MyMap from './MyMap';
import ContactBoxes from './ContactPages';
import RecentNews from '../../Common/RecentNews';
import RecentNews2 from '../../Common/RecentNews2';



const Contact= () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
       <CoverCarousel />
       <ContactBoxes/>
       <Pickup/>
        <MyMap/>
        <RecentNews2/>
        {/* <NewsletterSection/> */}
      

    </div>
  );
};

export default Contact;
    