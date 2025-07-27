import * as React from 'react';
//  import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../../Common/CoverCarousel';
 import ProductSection from './ProductSection';
 import TodayMenu from './TodayMenu';
 import Bbq from './Bbq';
import FeaturedDishes from './FeaturedDishes';
import Popular3 from './Popular3';
import Trending from './Trending';
import WeeklySpecial from './WeeklySpecial';
import PopularFood from '../../Common/PopularFood';
import Delicious from './Delicious';
import  Popular2 from './Popular2';
import TrendingMenu from './TrendingMenu';
import Products from './Products';
import Deal6 from '../../Common/Deal6';
import Specialoffer from './Specialoffer';
import InstaFollow from '../../Common/InstaFollow';

const Shop = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
       <CoverCarousel />
         <ProductSection/>
         <TodayMenu/>
          <Bbq/>
          <FeaturedDishes/>
          <Popular3/>
          <Trending/>
          <WeeklySpecial/>
          <PopularFood/>
          <Delicious/>
          <Popular2/>
          <TrendingMenu/>
          <Products/>
          <Deal6/>
          <Specialoffer/>
          <InstaFollow/>
        
  
     
{/*       
      <Experience /> */}
      

    </div>
  );
};

export default Shop;
    