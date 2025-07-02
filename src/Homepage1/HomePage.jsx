import * as React from 'react';
import Navbar from '../Common/Navbar';
import CoverPage from './CoverPage';
// import CoverPage2 from './CoverPage2';
import About1 from './About1';
import Bbq from './Bbq';
import DiscoverMenu from './DiscoverMenu';
import Review from './Review';
import RecentNews from './RecentNews';
import Follow from './Follow';
import Footer from '../Common/Footer';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CoverPage />
      {/* <CoverPage2 /> */}
     <About1/>  
       <Bbq/>
     <DiscoverMenu/>
     <Review/>
       <RecentNews/>
      <Follow/> 
      <Footer/> 
    </div>
  );
};

export default HomePage;