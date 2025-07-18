import React from "react";

function MyMap() {
  return (
    
    <div id="map-section" style={{ padding: "40px 0", textAlign: "center" }}>
      

      <div
        className="map-container"
        data-aos="zoom-in"
        style={{
          maxWidth: "80%",
          height: "500px",
          margin: "auto",
          marginTop:"66px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15228.402280472472!2d78.37315204661736!3d17.40696060270132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPizza%20Hut%20!5e0!3m2!1sen!2sin!4v1752816417686!5m2!1sen!2sin" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>

  );
}

export default MyMap;