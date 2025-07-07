// Example usage in PopularSection.js or Home.js
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
    <Box sx={{ display: "flex",justifyContent:'flex-start',alignItems:'center', flexDirection:'column',flexWrap:'wrap',gap: "0", marginTop: "32px", padding:"15px" ,width:"100%" }}>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',}}><Typography
            sx={{
              fontSize: '16px',
              fontFamily: 'Oswald',
              
              color: '#FFD40D',
              mb: 1,
              textAlign: { xs: 'center', md: 'left' },
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
            textAlign: 'left',
            mt: { xs: '35vw',sm:'0vw',md:'0vw',lg:'0vw' },
            mb: 2,
            lineHeight: 1.2,
          }}
        >Popular Food Items</Typography></Box>

<Box sx={{display:'flex',flexDirection:'row'}}>
     {foodItems.map((item, idx) => (
        <FoodCard
          key={idx}
          img={item.img}
          title={item.title}
          
          subtitle={item.subtitle}
          
          width="180px"
          height="220px"
          iw="130px"
          ih="130px"
          subcolor="#FFD40D"
          gap={idx === foodItems.length - 1 ? "0" : "24px"} // no right gap on last card
        />
      ))}
</Box>
<Box sx={{display:'flex',justifyContent:'center',gap:6,mt:8}}
> <Box sx={{
   width:'40%',
 
}}>
 <img src={ImageAssets.o1} width={400} 
     alt="offer1" />
     </Box>
      <Box sx={{
   width:'60%',
  
}}>
  <Box>  <img src={ImageAssets.o2} width={505} height={272}
     alt="offer2" /></Box>
      
     </Box>
      </Box>
    
    </Box>
        <Box
        component="img"
        src={ImageAssets.m1}
        alt="m1"
        sx={{
          width: '100%',
          display: 'block',
          mt: 0, // optional margin
        }}
      />
    </>
  );
};

export default PopularFood;
