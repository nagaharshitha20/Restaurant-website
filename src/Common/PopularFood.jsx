import React from "react";
import FoodCard from "../Common/FoodCard";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageAssets } from "../ImageAssets";

const foodItems = [
  {
    title: "Chicken",
    subtitle: "8 Products",
    img: ImageAssets.i1,
  },
  {
    title: "Pro Burger",
    subtitle: "3 Products",
    img: ImageAssets.i2,
  },
  {
    title: "Pro Pasta",
    subtitle: "3 Products",
    img: ImageAssets.i3,
  },
  {
    title: "Pro Pizza",
    subtitle: "3 Products",
    img: ImageAssets.i4,
  },
];

const PopularFood = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 0,
          mt: "32px",
          // mx:'auto',
          // p: "15px",
          width: "100%",
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'center' }}>
          <Typography
            sx={{
              fontSize: '16px',
              fontFamily: 'Oswald',
              color: '#FFD40D',
              mb: 1,
              
              textAlign: { xs: 'center', md: 'center' },
            }}
          >
            Crispy, every bite tasty
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: '#000',
              fontFamily: 'Oswald',
              fontSize: { xs: '8vw', sm: '6vw', md: '30px' },
              textAlign: { xs: 'center', md: 'left' },
              mt: { xs: '5vw', sm: '2vw', md: 0 },
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Popular Food Items
          </Typography>
        </Box>

        {/* Food Cards */}
       <Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: { xs: 'center', sm: 'space-between', md: 'center' },
    gap: { xs:1,md: 3 }, // only on md and up since spacing handled via calc() below
    mt: 2,
    mx:'auto',
    width: {md:'70%'},
  }}
>
  {foodItems.map((item, idx) => (
    <FoodCard
      key={idx}
      img={item.img}
      title={item.title}
      subtitle={item.subtitle}
      width="180px" // used on md and up only
      height="220px"
      iw="130px"
      ih="130px"
     subcolor="#FFD40D"
    />
  ))}
</Box>


        {/* Offers Section */}
        <Box
          sx={{
            display: {xs:'none',md:'flex'},
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            mt: 8,
            // width: '100%',
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '40%' }, display: 'flex', justifyContent: 'center' }}>
            <img
              src={ImageAssets.o1}
              alt="offer1"
              style={{ width: '100%', maxWidth: 400 }}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '60%' }, display: 'flex', justifyContent: 'center' }}>
            <img
              src={ImageAssets.o2}
              alt="offer2"
              style={{ width: '100%', maxWidth: 505, height: 'auto' }}
            />
          </Box>
        </Box>
      </Box>

      {/* Full-Width Image */}
      {/* <Box
        component="img"
        src={ImageAssets.m1}
        alt="m1"
        sx={{
          width: '100%',
          display: 'block',
          mt: 0,
        }}
      /> */}
    </>
  );
};

export default PopularFood;
