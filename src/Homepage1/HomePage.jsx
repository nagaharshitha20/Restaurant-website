import * as React from 'react';
import Navbar from './Navbar';
import CoverPage from './CoverPage';
import About1 from './About1';
import Bbq from './Bbq';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CoverPage />
      <About1/>
      <Bbq/>
      {/* Add other page content here */}
    </div>
  );
};

export default HomePage;