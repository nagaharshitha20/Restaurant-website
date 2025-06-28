import * as React from 'react';
import Navbar from './Navbar';
import CoverPage from './CoverPage';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <CoverPage />
      {/* Add other page content here */}
    </div>
  );
};

export default HomePage;