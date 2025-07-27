import React from "react";
import { Box, Typography } from "@mui/material";
import { ImageAssets } from '../../ImageAssets';

const foodItems = [
  { img: ImageAssets.i1, title: "Delicious Burger", price: "60.00$" },
  { img: ImageAssets.i2, title: "Grilled Chicken", price: "42.00$39.00$" },
  { img: ImageAssets.i3, title: "Ruti With Chicken", price: "29.00$26.00$" },
  { img: ImageAssets.i4, title: "Fast Food Combo", price: "34.00$28.00$" },
  { img: ImageAssets.i1, title: "Chicago Deep Pizza", price: "28.00$22.00$" },
  { img: ImageAssets.i2, title: "Chinese Pasta", price: "40.00$34.00$" },
  { img: ImageAssets.i3, title: "Whopper Burger King", price: "30.00$26.00$" },
  { img: ImageAssets.i4, title: "Ruti With Beef Slice", price: "30.52$28.52$" },
];

const Products = () => (
  <Box sx={{ background: "#EF1B48", py: 6, textAlign: "center" ,}}>
    <Typography sx={{ color: "#00aa00", fontFamily: "Oswald", fontSize: 16 }}>
      Best Selling Dishes
    </Typography>
    <Typography
      sx={{
        fontSize: { xs: "7vw", sm: "5vw", md: 32 },
        fontWeight: 700,
        fontFamily: "Oswald",
        color: "#000",
        mb: 5,
      }}
    >
      Explore Our Products
    </Typography>

    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)", // 3 per row on xs
          sm: "repeat(3, 1fr)", // 3 per row on sm
          md: "repeat(auto-fit, minmax(180px, 1fr))", // keep same for md+
        },
        gap: "10px",
        maxWidth: 850,
        mx: "auto",
        px: 3,
        mb: 5,
      }}
    >
      {foodItems.map((item, idx) => (
        <Box
          key={idx}
          sx={{
            bgcolor: "#FFC727",
            p: 2,
            textAlign: "center",
            height:{xs:180,md:220},
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
            {item.title}
          </Typography>
          <Typography sx={{ fontSize: 13, color: "#000" }}>
            price <span style={{ fontWeight: 600 }}>{item.price}</span>
          </Typography>
          <Box
            component="img"
            src={item.img}
            alt={item.title}
            sx={{ height: 180, width: "100%", objectFit: "contain", mx: "auto" }}
          />
        </Box>
      ))}
    </Box>
  </Box>
);

export default Products;
