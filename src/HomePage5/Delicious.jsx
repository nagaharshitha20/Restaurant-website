import React, { useState } from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  Grid,
} from "@mui/material";
import { FoodItems } from "../Data/FoodItems";
import NormalButton from "../Common/NormalButton";
import PlayButton from "../Common/PlayButton";
import { ImageAssets } from "../ImageAssets";


const tabCategories = FoodItems.map((item) => item.category);

const Delicious = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedItems = FoodItems[selectedTab]?.items || [];

  const promoText = {
    fontSize: 14,
    color: '#FFD43A',
    mb: 1,
  };

  const promoTitle = {
    fontSize: 22,
    fontWeight: 'bold',
    mb: 1,
  };

  const promoBox = (bg, content) => (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        p: 3,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {content}
    </Box>
  );

  return (
    <Box sx={{ mt: 8, px: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <Typography sx={{ fontSize: 16, fontFamily: "Oswald", color: "#00aa00", mb: 1 }}>
        About Our Food
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "7vw", sm: "5vw", md: 32 },
          fontFamily: "Oswald",
          fontWeight: 700,
          mb: 4,
        }}
      >
        Hot Delicious Item
      </Typography>

    
      <Tabs
        value={selectedTab}
        onChange={(e, v) => setSelectedTab(v)}
        centered
        sx={{
          mb: 5,
          '& .MuiTab-root': {
            borderRadius: '40px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            px: 3,
            py: 1,
            mx: 1,
            fontWeight: 600,
            textTransform: 'none',
            fontSize: 16,
            color: '#222',
          },
          '& .Mui-selected': {
            backgroundColor: '#FFD43A',
            color: '#000',
            borderColor: '#FFD43A',
          },
        }}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {tabCategories.map((label, idx) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

    
      <Grid container spacing={4} sx={{ px: { xs: 2, sm: 4, md: 10 }, mb: 10 }}>
        {selectedItems.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 2 }}>
              <Box component="img" src={item.img} alt={item.title} sx={{ width: '170px', height: '170px', objectFit: 'contain', mb: 2 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600, fontFamily: 'Oswald', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'gray' }}>
                It’s the perfect dining experience where
                <br />
                Experience quick and efficient
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

 
      <Box
  sx={{
    width: '100%',
    height: '250px',
    position: 'relative',
  }}
>
  
  <Box
    component="img"
    src={ImageAssets.top1}
    alt="Popular Dishes"
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }}
  />
  <Box
    sx={{
      position: 'absolute',
      top: '80%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    }}
  >
    <PlayButton />
  </Box>
</Box>

   
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#EF294C',
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
          px: { xs: 2, md: 0 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Box component="img" src={ImageAssets.tomato} alt="tomato" sx={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.1, width: 100 }} />
        <Box component="img" src={ImageAssets.chilli} alt="chilli" sx={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, width: 80 }} />

        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Oswald', fontWeight: 600, fontSize: { xs: 18, md: 14 }, color: '#FFD43A' }}>
            Crispy, Every Bite Taste
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Oswald',
              fontSize: { xs: 28, md: 40 },
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            30 Minutes Fast <br />
            <Box component="span" sx={{ color: '#FFD43A' }}>Delivery</Box> Challenge
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mt: { xs: 4, md: 0 } }}>
          <Box component="img" src={ImageAssets.bike} alt="bike" sx={{ width: { xs: '180px', md: '280px' }, maxWidth: '100%' }} />
          <NormalButton color="#000" bgcolor="#fff" name="Order Now" />
        </Box>
      </Box>

 
      <Box sx={{ width: '100%', fontFamily: 'Oswald', overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
       
          <Box component="img" src={ImageAssets.today} alt="today" sx={{ width: '50%',height:'600px' }} />

        
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gridTemplateRows: '1fr 1fr',
              width: { xs: '100%', md: '50%' },
              height: { xs: 'auto', md: '600px' },
              flex: 1,
            }}
          >
           
            {promoBox(ImageAssets.background1, (
              <>
                <Typography sx={promoText}>Delicious</Typography>
                <Typography sx={promoTitle}>Burger Combo</Typography>
                <Typography sx={{ fontSize: 14 }}>This Weekend Only</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Limited Offer / <span style={{ color: '#FFD43A' }}>$5</span></Typography>
                <Box component="button" sx={{ backgroundColor: '#FFD43A', color: '#000', mt: 2, px: 3, py: 1, border: 'none', borderRadius: '20px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                  Order Now
                </Box>
              </>
            ))}

            
            {promoBox(ImageAssets.background3, (
              <>
                <Typography sx={promoText}>Crispy, Every Bite Taste</Typography>
                <Typography sx={promoTitle}>SUPER DELICIOUS</Typography>
                <Box component="img" src={ImageAssets.off} sx={{ width: 130, height: 110, borderRadius: '50%' }} />
              </>
            ))}

            
            {promoBox(ImageAssets.background2, (
              <>
                <Typography sx={promoText}>Crispy, Every Bite Taste</Typography>
                <Typography sx={promoTitle}>FASH FOOD MEAL</Typography>
                <Typography sx={{ fontSize: 14 }}>The mouth-watering aroma of sizzling burgers</Typography>
                <Box component="img" src={ImageAssets.ch2} alt="fries" sx={{ position: 'absolute', right: 20, bottom: 10, width: 120 }} />
                <Box component="button" sx={{ backgroundColor: '#FFD43A', color: '#000', mt: 3, px: 3, py: 1, border: 'none', borderRadius: '20px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                  Order Now
                </Box>
              </>
            ))}

            
            {promoBox(ImageAssets.background4, (
              <>
                <Box component="img" src={ImageAssets.ch2} alt="fries" sx={{ position: 'absolute', right: 20, bottom: 10, width: 120 }} />
                <Box component="img" src={ImageAssets.off2} sx={{ width: 200 }} />
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Delicious;
