import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ImageAssets } from "../ImageAssets";
import NormalButton from "../Common/NormalButton";

const foodItems = [
  { img: ImageAssets.i1, title: "Delicious Burger", discount: "-25%", oldPrice: "60.00$", newPrice: "45.00$" },
  { img: ImageAssets.i2, title: "Grilled Chicken", discount: "-7%", oldPrice: "42.00$", newPrice: "39.00$" },
  { img: ImageAssets.i3, title: "Ruti With Chicken", discount: "-10%", oldPrice: "29.00$", newPrice: "26.00$" },
  { img: ImageAssets.i4, title: "Fast Food Combo", discount: "-15%", oldPrice: "34.00$", newPrice: "28.00$" },
  { img: ImageAssets.i1, title: "Chicago Deep Pizza", discount: "-27%", oldPrice: "28.00$", newPrice: "22.00$" },
  { img: ImageAssets.i2, title: "Chinese Pasta", discount: "-15%", oldPrice: "40.00$", newPrice: "34.00$" },
  { img: ImageAssets.i3, title: "Whopper Burger King", discount: "-10%", oldPrice: "30.00$", newPrice: "26.00$" },
  { img: ImageAssets.i4, title: "Ruti With Beef Slice", discount: "-7%", oldPrice: "30.00$", newPrice: "28.50$" },
];

const Popular3 = () => (
  <Box sx={{ mt: 5, px: 2,display:'flex', justifyContent: "center" ,flexDirection:'column',alignItems:'center'}}>
    
    {/* Section Header */}

    <Typography sx={{ fontSize: 16, fontFamily: "Oswald", color: "#00aa00", mb: 1 }}>
      Crispy, Every Bite Taste
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: "7vw", sm: "5vw", md: 32 },
        fontFamily: "Oswald",
        fontWeight: 700,
        mb: 4,
      }}
    >
      Popular Fast Foods
    </Typography>

    {/* Card Container */}
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "1300px",
        mx: "auto",
        mb:5
      }}
    >
      {foodItems.map((item, idx) => (
        <Box key={idx} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Card Box */}
          <Box
            sx={{
              width: "230px",
              height: "180px",
              bgcolor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              position: "relative",
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Wishlist Icon */}
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                bgcolor: "black",
               
                color:'white',
                borderRadius: "50%",
                "&:hover": { color: "red",bgcolor:"#fff"},
              }}
            >
              <FavoriteIcon fontSize="small" />
            </IconButton>

            {/* Food Image */}
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
          </Box>

          {/* Text Below Card */}
          <Box sx={{ mt: 1.5, textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 0.5 }}>
              <Box
                sx={{
                  bgcolor: "#FFD40D",
                  px: 1,
                  fontSize: "12px",
                  fontWeight: 600,
                  borderRadius: "4px",
                }}
              >
                {item.discount}
              </Box>
              <Typography variant="body2" sx={{ color: "#888", textDecoration: "line-through" }}>
                {item.oldPrice}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.newPrice}</Typography>
            </Box>
            <Typography sx={{ fontWeight: 600, fontSize: "15px", color: "#222" }}>{item.title}</Typography>
          </Box>
          
        </Box>
        
      ))}
    </Box>
    <NormalButton name="Order Now" bgcolor="#F3274C" color="#FFFFFF" />
  </Box>
  );


export default Popular3;
