import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const ContactBoxes = () => {
  const [hovered, setHovered] = useState(null);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
 
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: {xs:"70%",md:"100%"},
  };

  const boxBaseStyle = {
    backgroundColor: "#fff",
    padding: "60px 20px",
    textAlign: "center",
    borderRadius: "10px",
       marginTop:"10px",
    transition: "all 0.3s ease",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    flex: 1,
  };

  const activeBoxStyle = {
    backgroundColor: "#008537",
    color: "#fff", // text color (not heading/para since we're overriding)
  };

  const headingStyle = (isActive) => ({
    marginBottom: "10px",
    fontWeight: "bold",
    color: isActive ? "#fff" : "#000",
  });

  const paragraphStyle = (isActive) => ({
    fontSize: "14px",
    color: isActive ? "#fff" : "#000",
  });

  const iconStyle = (isActive) => ({
    fontSize: "50px",
    marginBottom: "10px",
    color: isActive ? "#fff" : "#008537",
  });

  const getResponsiveStyle = () => {
    if (window.innerWidth >= 992) {
      return {
        flexDirection: "row",
      };
    }
    return {
      flexDirection: "column",
    };
  };

  const [responsiveStyle, setResponsiveStyle] = useState(getResponsiveStyle());

  useEffect(() => {
    const handleResize = () => {
      setResponsiveStyle(getResponsiveStyle());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ ...containerStyle, ...responsiveStyle }}>
      {/* Address Box */}
      {(() => {
        const isActive = hovered === "address";
        return (
          <div
            style={{
              ...boxBaseStyle,
              ...(isActive ? activeBoxStyle : {}),
            }}
            onMouseEnter={() => setHovered("address")}
            onMouseLeave={() => setHovered(null)}
          >
            <HomeOutlinedIcon style={iconStyle(isActive)} />
            <h3 style={headingStyle(isActive)}>ADDRESS LINE</h3>
            <p style={paragraphStyle(isActive)}>
              Bowery St, New York, 37 USA NY 10013, USA
            </p>
          </div>
        );
      })()}

      {/* Phone Box (Always Active) */}
      {(() => {
        const isActive = true;
        return (
          <div style={{ ...boxBaseStyle, ...activeBoxStyle }}>
            <PhoneOutlinedIcon style={iconStyle(isActive)} />
            <h3 style={headingStyle(isActive)}>PHONE NUMBER</h3>
            <p style={paragraphStyle(isActive)}>
              +1255 - 568 - 6523 4374-221 +1255 - 568 - 6523
            </p>
          </div>
        );
      })()}

      {/* Mail Box */}
      {(() => {
        const isActive = hovered === "mail";
        return (
          <div
            style={{
              ...boxBaseStyle,
              ...(isActive ? activeBoxStyle : {}),
            }}
            onMouseEnter={() => setHovered("mail")}
            onMouseLeave={() => setHovered(null)}
          >
            <EmailOutlinedIcon style={iconStyle(isActive)} />
            <h3 style={headingStyle(isActive)}>MAIL ADDRESS</h3>
            <p style={paragraphStyle(isActive)}>
              email@example.com info@yourdomain.com
            </p>
          </div>
        );
      })()}
    </div>
  );
};

export default ContactBoxes;

