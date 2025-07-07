// FoodCard.js
import React from "react";
import { Box } from "@mui/material";

const FoodCard = ({ width = "180px", height = "220px",
     img, title,subtitle, 
     subcolor="#888", gap = "16px",
     ih="80px",iw="80px",tf="Oswald",stf="Oswald"
    }) => {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: "12px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        padding: "16px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginRight: gap,
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
        <h4 style={{ fontSize: "1.2rem", margin: "12px 0 5px", fontWeight: "600", color: "#333",fontFamily:tf }}>{title}</h4>
        <Box
                sx={{
                  width: '50px',
                  height: '2.5px',
                  backgroundColor: '#FFD700',
                  mx: 'auto',
                  mb: 1,
                  borderRadius: '3px',
                }}
              />
        <p style={{ fontSize: "0.85rem",fontWeight: "600", color: subcolor,fontFamily:stf  }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default FoodCard;
