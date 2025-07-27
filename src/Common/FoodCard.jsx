// FoodCard.js
import React from "react";
import { Box } from "@mui/material";

const FoodCard = ({
  width = "180px",
  height = "220px",
  img,
  title,
  subtitle,
  subcolor = "#888",
  gap = "16px",
  ih = "80px",
  iw = "80px",
  tf = "Oswald",
  stf = "Oswald",
}) => {
  return (
  <Box
    sx={{
      width: {
        xs: '40%',
        sm: 'calc(50% - 12px)',
        md: width,
        lg: width,
      },
      height: {
        xs: '200px',
        md: height,
        lg: height,
      },
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      padding: { xs: '8px', md: "16px" },
      textAlign: "center",
      display: "flex",
      mx: 'auto',
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom: gap,
    }}
  >
    <img
      src={img}
      alt={title}
      style={{
        width: iw,
        height: ih,
        objectFit: "contain",
        margin: "0 auto",
      }}
    />

    <div>
      <h4
        style={{
          fontSize: "1.2rem",
          margin: "12px 0 5px",
          fontWeight: "600",
          color: "#333",
          fontFamily: tf,
        }}
      >
        {title}
      </h4>

      {/* Subtitle + Yellow line centered below title (md and up only) */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          mt: 1,
        }}
      >
       <Box
  data-testid="decorative-line"
  sx={{
    width: "50px",
    height: "2.5px",
    backgroundColor: "#FFD700",
    mb: 1,
    borderRadius: "3px",
  }}
/>

        <p
          style={{
            fontSize: "0.85rem",
            fontWeight: "600",
            color: subcolor,
            fontFamily: stf,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      </Box>
    </div>
  </Box>
);

};

export default FoodCard;
