import * as React from 'react';
import HomePage2 from "./HomePage2/HomePage2";
import Navbar from './Common/Navbar';
import HomePage1 from './Homepage1/HomePage1';
// import FeatureSection from './HomePage2/FeatureSection';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage1 /> */}
      <HomePage2 />
      

    </div>
  );
};

export default App;