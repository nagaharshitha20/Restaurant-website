import * as React from 'react';
import CoverPage4 from './CoverPage4';
import PopularFood from './PopularFood';
import Popular2 from './Popular2';
import Popular3 from './Popular3';
import Trending from './Trending';
import Quality from './Quality';
import Kfc from './Kfc';
import FooterGallery from '../Common/FooterGallery';
import CoverCarousel from '../Common/CoverCarousel';



const HomePage4 = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
     {/* <CoverPage4/> */}
     <CoverCarousel/>
     <PopularFood/>
     <Popular2/>
     <Popular3/>
     <Trending/>
     <Quality/>
     <Kfc/>
     <FooterGallery/>
   
    </div>
  );
};

export default HomePage4;