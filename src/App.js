// src/App.js
import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import MainApp from "./MainApp"; 
import "./index.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {showSplash ? <SplashScreen /> : <MainApp />}
    </div>
  );
};

export default App;
