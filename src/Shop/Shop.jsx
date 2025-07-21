import * as React from 'react';
//  import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../Common/CoverCarousel';
import FeatureSection from '../HomePage2/FeatureSection';
// import Menu from './Menu';
import DiscoverMenu from '../HomePage1/DiscoverMenu';
import MenuSection from '../HomePage3/MenuSection';
import DealOfWeek from '../HomePage2/DealOfWeek';
// import Experience from './Experience';
import RecentNews from '../HomePage1/RecentNews';
import TodayMenu from '../HomePage7/TodayMenu';
import Pickup from '../HomePage7/Pickup';
import About3 from '../HomePage3/About3';
import Bbq from '../HomePage1/Bbq';
import FeaturedDishes from '../HomePage1/FeaturedDishes';
import WeeklySpecial from '../HomePage3/WeeklySpecial';
import PopularFood from '../HomePage4/PopularFood';
import Delicious from '../HomePage5/Delicious';
import Popular2 from '../HomePage4/Popular2';
import TrendingMenu from '../HomePage5/TrendingMenu';
import Products from '../HomePage6/Products';
import Deal6 from '../HomePage6/Deal6';
import ProductSection from '../HomePage7/ProductSection';
import Specialoffer from '../HomePage7/Specialoffer';
import InstaFollow from '../Common/InstaFollow';
import Popular3 from '../HomePage4/Popular3';
import Trending from '../HomePage4/Trending';

const Shop = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <CoverPage2 /> */}
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
    