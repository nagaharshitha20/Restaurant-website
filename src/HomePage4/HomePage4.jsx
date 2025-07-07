import * as React from 'react';
import CoverPage4 from './CoverPage4';
import PopularFood from './PopularFood';
import Popular2 from './Popular2';
import Popular3 from './Popular3';
import Trending from './Trending';
import Quality from './Quality';
import Kfc from './Kfc';




const HomePage4 = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
     <CoverPage4/>
     <PopularFood/>
     <Popular2/>
     <Popular3/>
     <Trending/>
     <Quality/>
     <Kfc/>
   
    </div>
  );
};

export default HomePage4;