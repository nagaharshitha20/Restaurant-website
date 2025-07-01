import * as React from 'react';
import Navbar from '../Common/Navbar';
import CoverPage from './CoverPage';
import About1 from './About1';
import Bbq from './Bbq';
import DiscoverMenu from './DiscoverMenu';
import Review from './Review';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CoverPage />
      <About1/>
      <Bbq/>
      <DiscoverMenu/>
      <Review/>
    </div>
  );
};

export default HomePage;