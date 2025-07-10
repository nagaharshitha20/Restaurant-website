import * as React from 'react';
import HomePage2 from "./HomePage2/HomePage2";
import Navbar from './Common/Navbar';
import Footer from './Common/Footer';
import HomePage3 from './HomePage3/HomePage3';
import './index.css';

// import FeatureSection from './HomePage2/FeatureSection';
import MainApp from './MainApp';

const App = () => {
  return (
    <div style={{overflowX:'hidden'}}>
      
      <MainApp/>

    </div>
  );
};

export default App;