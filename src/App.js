import * as React from 'react';
import HomePage2 from "./HomePage2/HomePage2";
import Navbar from './Common/Navbar';
import HomePage1 from './HomePage1/HomePage1';
import Footer from './Common/Footer';
import HomePage3 from './HomePage3/HomePage3';
// import FeatureSection from './HomePage2/FeatureSection';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <HomePage1 /> */}
      {/* <HomePage2 /> */}
      <HomePage3/>
      <Footer/>
      

    </div>
  );
};

export default App;