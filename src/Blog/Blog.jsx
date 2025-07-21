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

import RecentNews2 from '../HomePage2/RecentNews2';
import BlogSection from '../HomePage6/BlogSection';
import Learn from '../HomePage6/Learn';
import FooterGallery from '../Common/FooterGallery';
const Blog = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <CoverPage2 /> */}
       <CoverCarousel />
   <Learn/>
   
     <RecentNews2/>
     <BlogSection/>
     <FooterGallery/>
       <RecentNews/>

      

    </div>
  );
};

export default Blog;
    