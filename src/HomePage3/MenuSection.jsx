import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const menuItems = [
  { img: ImageAssets.pizza, title: 'Shroom Bacon Burger', price: '$11.76' },
  { img: ImageAssets.blackcoffee, title: 'Delicious Black Coffee', price: '$11.76' },
  { img: ImageAssets.grillchicken, title: 'BBQ Chicken Pizza New', price: '$13.17' },
  { img: ImageAssets.good, title: 'Crispy Fried Chicken', price: '$15.10' },
  { img: ImageAssets.grillchicken, title: 'Zinger Double Burger', price: '$20.10' },
  { img: ImageAssets.pizza, title: 'Margherita Pizza New', price: '$15.80' },
  { img: ImageAssets.grillchicken, title: 'Crispy Fried Chicken', price: '$10.85' },
  { img: ImageAssets.good, title: 'Black Pepper Burger', price: '$10.85' },
];

const MenuSection = () => (
  <Box >
    {/* How We Work Section */}
   <Box
  sx={{
    background: `url(${ImageAssets.bg4})
     no-repeat center/cover`,
     width: '75%',
    height: { xs: 'auto', md: '50vh' },
    pt: { xs: 6, md: 10},
    pb: { xs: 6, md: 10 },
    // px: { xs: 2, md: 6 },
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
zIndex: 1,
    borderTopRightRadius: { xs: 60, md: 250 },
    borderBottomRightRadius: { xs: 60, md: 250 },
 
    position: 'relative',
  
  }}
>
  {/* Left Content */}
  <Box sx={{ width: { xs: '100%', md: '70%' }, color: '#fff', fontFamily: 'Fredoka One',
textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
                left:'250px',
              alignItems: 'flex-start',}}>
    <Typography variant="h6" sx={{ mb: 1,  }}>
      Easy Order In 3 Steps
    </Typography>
    <Typography variant="h4" sx={{ fontFamily: 'Fredoka One', mb: 5, textAlign: 'center' }}>
      How We Work
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {[
        { label: 'Explore Menu', desc: 'Viewing, ordering and filtering your desire', img: ImageAssets.tea },
        { label: 'Choose a Dish', desc: 'Viewing, ordering and filtering your desire', img: ImageAssets.juice },
        { label: 'Place Order', desc: 'Viewing, ordering and filtering your desire', img: ImageAssets.shop },
      ].map((item, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Box
            sx={{
              
              color: '#fff',
              p: 2,
              borderRadius: 4,
              maxWidth: 160,
              mx: 'auto',
              textAlign: 'left',
              
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt="icon"
              sx={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                backgroundColor: '#FFD700',
                p: 1,
                
                mb: 2,
              }}
            />
            <Typography variant="subtitle1" sx={{ fontFamily: 'Fredoka One',}}>
              {item.label}
            </Typography>
            <Typography variant="body2">{item.desc}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>

  {/* Right Image Overlapping */}
  <Box
    sx={{
      display: { xs: 'none', md: 'block' },
      // width: '50%',
      position: 'relative',
      left:'0%',
     
    }}
  >
    <Box
      component="img"
      src={ImageAssets.work}
      alt="How We Work"
      sx={{
        width: '80%',
        maxWidth: 400,
        borderRadius: '50%',
        zIndex: 2,
      
        transform: 'translateX(200px)', // overlaps to the right
      }}
    />
  </Box>
</Box>

      

    {/* Fast Food Menu Section */}
    <Box sx={{ background: '#fff', pt: 8, pb: 10, }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 1, fontFamily: 'Fredoka One',  }}>
        Fast Food Menus
      </Typography>
      <Box sx={{ width: '150px', height: '4px', backgroundColor: '#FFD700', mx: 'auto', mb: 5, borderRadius: '2px' }} />

      <Grid container spacing={4} display="flex" justifyContent="center" width="100%" >
        {menuItems.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={6}  >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center',alignItems: 'center', textAlign: 'center',width:'100%' }}>
                <Box
              sx={{
                backgroundColor: '#fff',
            padding: 2,
                borderRadius: 4,
                // float:'left',
                width: '100%',
                height: '100%',
             
                display:'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                textAlign: 'left',
              }}
            ><Box >
                <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{ width: 150, height: 150, borderRadius: '50%', p: 1, mb: 1 ,}}
              /></Box>
              


            <Box >
                 <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
              <Typography variant="body2" sx={{ color: '#f14d54' }}>{item.price}</Typography></Box>
            </Box>
             </Box>
             
          </Grid>
          
        ))}
<Grid item xs={12} sm={6} md={6}>
          <Box sx={{ backgroundColor: '#FFD700', p: 3, borderRadius: 4, height: '80%' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>OPENING TIMES</Typography>
            <Typography variant="body2">Mon: 17:00 to 23:00</Typography>
            <Typography variant="body2">Tue: 17:00 to 23:00</Typography>
            <Typography variant="body2" sx={{ mt: 2, color: '#f14d54' }}>+2341 567 891</Typography>
            <Typography variant="body2">Avenue New Town 13th United States</Typography>
          </Box>
        </Grid>
        {/* Opening Hours */}
        
      </Grid>
    </Box>
  </Box>
);

export default MenuSection;
