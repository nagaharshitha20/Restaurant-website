
import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setVisible(false);
    },  1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-screen">
      <video
        src="/heavenlyte.mp4"
        autoPlay
        muted
        playsInline
        className="splash-video"
        onEnded={() => setVisible(false)}
      />
    </div>
  );
};

export default SplashScreen;
