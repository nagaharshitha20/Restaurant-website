// src/App.js
import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import MainApp from "./MainApp"; // Your actual app
import "./index.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // Match video length
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {showSplash ? <SplashScreen /> : <MainApp />}
    </div>
  );
};

export default App;
