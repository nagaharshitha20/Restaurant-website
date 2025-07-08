import * as React from 'react';
import CoverPage6 from './CoverPage6';
import Learn from './Learn';
import Products from './Products';
import Deal6 from './Deal6';
import BlogSection from './BlogSection';
import NewsletterSection from './NewsletterSection';

const HomePage6=()=>{
      return (
    <div style={{ overflowX: 'hidden' }}>
     
      <CoverPage6 />
      <Learn/>
        <Products/>
        <Deal6/>
        <BlogSection/>
      <NewsletterSection/>
      
     
       
    </div>
  );
};

export default HomePage6;