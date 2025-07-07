import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import CarouselCard from "../Common/CarouselCard";
import CardCarousel from "../Common/CardCarousel";

const trendingMenu = [
  { name: "CHICAGO DEEP PIZZA", desc: "It’s the perfect dining experience where Experience quick and efficient", price: "$22.00" },
  { name: "CHINESE PASTA", desc: "It’s the perfect dining experience where Experience quick and efficient", price: "$34.00" },
  { name: "Chicago Burger King.", desc: "It’s the perfect dining experience where Experience quick and efficient", price: "$26.00" },
  { name: "Chicago Chicken Wings.", desc: "It’s the perfect dining experience where Experience quick and efficient", price: "$39.00" },
  { name: "Chicago French Fries.", desc: "It’s the perfect dining experience where Experience quick and efficient", price: "$28.00" },
  { name: "Chicago Deep Pasta.", desc: "It’s the perfect dining experience where Experience quick and efficient", price: "$34.00" },
  { name: "Chicago Beef Jerky.", desc: "It’s the perfect dining experience where Experience quick and efficient", price: "$39.00" },
  { name: "Chicago Salad Recipes.", desc: "It’s the perfect dining experience where Experience quick and efficient", price: "$26.00" },
];

const TrendingMenu = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: { xs: 4, md: 8 },  }}>
        <div
        style={{display:'flex',justifyContent:'center',textAlign:'center',flexDirection:'column',}}> 
        <Typography sx={{ color: "#00aa00", fontSize: 16, mb: 1 ,fontFamily: 'Oswald'}}>
        About Our Food
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontFamily: "Oswald",
          mb: 4,
          fontSize: { xs: 28, md: 36 },
        }}
      >
        Trending Food Menu
      </Typography></div>
    
     <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    mt: 1,
    mb:4,
  }}
>
  <Box
    sx={{
      border: '1px solid #ccc',
      borderRadius: 2,
      backgroundColor: '#fff',
      px: { xs: 3, sm: 5 },
      py: { xs: 3, sm: 8 },
    }}
  >
    <Grid container spacing={3}>
          {[0, 1].map((col) => (
            <Grid item xs={12} md={6} key={col}>
              {trendingMenu
                .filter((_, idx) => idx % 2 === col)
                .map((item, i, arr) => (
                  <Box key={item.name} sx={{ mb: i !== arr.length - 1 ? 3 : 0, }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" ,}}>
                      <Box >
                        <Typography sx={{ fontWeight: 700, mb: 0.5, fontSize: 14,fontFamily:'Oswald' }}>
                          {item.name}
                        </Typography>
                        <Typography sx={{ fontSize: 13, color: "#555" ,fontFamily:'Oswald' }}>
                          {item.desc}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#F5A623", whiteSpace: "nowrap" ,fontFamily:'Oswald' }}>
                        {item.price}
                      </Typography>
                    </Box>
                    {i !== arr.length - 1 && (
                      <Divider sx={{ mt: 5 }} />
                    )}
                  </Box>
                ))}
            </Grid>
          ))}
        </Grid>
  </Box>
</Box>

<CardCarousel />
    </Box>
  );
};

export default TrendingMenu;
