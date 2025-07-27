import * as React from 'react';
//  import CoverPage2 from './CoverPage2';
 import CoverCarousel from '../../Common/CoverCarousel';
import RecentNews2 from '../../Common/RecentNews2';
import RecentNews from '../../Common/RecentNews';
import Learn from '../../Common/Learn';
import BlogSection from './BlogSection';
import FooterGallery from '../../Common/FooterGallery';
const Blog = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>

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
    