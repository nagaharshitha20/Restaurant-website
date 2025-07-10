import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FastFoodCard = ({ img, title, discount, oldPrice, newPrice }) => {
  return (
    <Box
      sx={{
        width: "230px",
        height: "300px",
        bgcolor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        position: "relative",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
     
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          bgcolor: "#f4f4f4",
          borderRadius: "50%",
          "&:hover": { bgcolor: "#eee" },
        }}
      >
        <FavoriteBorderIcon fontSize="small" />
      </IconButton>

      
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{ width: "100px", height: "100px", objectFit: "contain", mb: 2 }}
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <Box
          sx={{
            bgcolor: "#FFD40D",
            px: 1,
            py: "2px",
            fontSize: "12px",
            fontWeight: 600,
            borderRadius: "4px",
          }}
        >
          {discount}
        </Box>
        <Typography variant="body2" sx={{ color: "#999", textDecoration: "line-through" }}>
          {oldPrice}
        </Typography>
        <Typography variant="body2" sx={{ color: "#000", fontWeight: 600 }}>
          {newPrice}
        </Typography>
      </Box>

   
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 600,
          color: "#222",
          mt: "auto",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default FastFoodCard;
