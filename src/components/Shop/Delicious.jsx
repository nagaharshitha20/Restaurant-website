import React, { useState } from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  Grid,
} from "@mui/material";
import { FoodItems } from "../../Data/FoodItems";
import NormalButton from "../../Common/NormalButton";
import PlayButton from "../../Common/PlayButton";
import { ImageAssets } from '../../ImageAssets';

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
    fontSize: { xs: 20, sm: 24, md: 28 },
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
        p: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: { xs: 200, sm: 240, md: '100%' },
        position: 'relative',
      }}
    >
      {content}
    </Box>
  );

  return (
    <Box sx={{ mt: 8, px: { xs: 2, sm: 3, md: 4 }, display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <Typography sx={{ fontSize: 16, fontFamily: "Oswald", color: "#00aa00", mb: 1 }}>
        About Our Food
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "7vw", sm: "5vw", md: 32 },
          fontFamily: "Oswald",
          fontWeight: 700,
          mb: 4,
          textAlign: "center"
        }}
      >
        Hot Delicious Item
      </Typography>

      {/* Custom Tabs for xs/sm */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mb: 4,
        }}
      >
        {tabCategories.map((label, idx) => (
          <Box
            key={label}
            onClick={() => setSelectedTab(idx)}
            sx={{
              width: '45%',
              textAlign: 'center',
              borderRadius: '40px',
              backgroundColor: selectedTab === idx ? '#FFD43A' : 'white',
              border: '1px solid #ddd',
              py: 1.5,
              px: 0,
              fontWeight: 600,
              fontSize: 14,
              color: selectedTab === idx ? '#000' : '#222',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

      {/* Original Tabs for md and up */}
      <Tabs
        value={selectedTab}
        onChange={(e, v) => setSelectedTab(v)}
        centered
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          display: { xs: 'none', md: 'flex' },
          mb: 5,
          '& .MuiTab-root': {
            borderRadius: '40px',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            py: 2,
            mx: 1,
            fontWeight: 600,
            textTransform: 'none',
            fontSize: 14,
            color: '#222',
            minWidth: 100,
          },
          '& .Mui-selected': {
            backgroundColor: '#FFD43A',
            color: '#000',
            borderColor: '#FFD43A',
          },
        }}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {tabCategories.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>

      {/* Food Items */}
      <Grid container spacing={4} sx={{ px: { xs: 2, sm: 4, md: 10 }, mb: 10 }}>
        {selectedItems.map((item, idx) => (
          <Grid item xs={6} sm={6} md={3} key={idx}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 2 }}>
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: { xs: 120, sm: 150, md: 170 },
                  height: { xs: 120, sm: 150, md: 170 },
                  objectFit: 'contain',
                  mb: 2,
                }}
              />
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

   

    </Box>
  );
};

export default Delicious;
