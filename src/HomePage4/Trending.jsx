import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets'; 

const Trending = () => {
  return (<>
    <Box sx={{ width: '100%',  fontFamily: 'Oswald',mt:10 }}>
     
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          minHeight: { xs: 'auto', md: '100vh' },
        }}
      >
      
        <Box
          sx={{
            position: 'relative',
            flex: 1,
            backgroundImage: `url(${ImageAssets.left})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 3, sm: 20 },
            minHeight: '100%',
          }}
        >
        
          <Box sx={{ zIndex: 2, maxWidth: '500px', width: '100%', }}>
            <Typography
              variant="body2"
              sx={{ color: '#00A651', fontWeight: 700, mb: 1 ,fontFamily: 'Oswald'}}
            >
              CRISPY, EVERY BITE TASTE
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '8vw', sm: '5vw', md: '3vw' },
                fontFamily: 'Oswald',
                lineHeight: 1.2,
              }}
            >
              Trending Food Combo <br />
              Offer Less <span style={{ color: '#00C851' }}>20%</span>
            </Typography>

            <Typography variant="body2" sx={{ color: '#333', mt: 3 ,fontFamily: 'Oswald',mb:3}}>
              A team of dreamers and doers building unique interactive music and art festivals.
            </Typography>

           
        <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    mt: 1,
   
    width: '100%',
    maxWidth: '500px', 
  }}
>
  {[
    { img: ImageAssets.chicken, text: '30% Off 4pcs Hot Crispy & 8 Pcs Wing', bg: '#F5F5F5' },
    { img: ImageAssets.pizzahouse, text: '20% Off Tasty Pizza With Drink', bg: '#FFD54F' },
    { img: ImageAssets.bestburgers, text: '2pcs Hamburger With Drinks & Sauce', bg: '#F5F5F5' },
  ].map((item, i) => (
    <Box
      key={i}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        bgcolor: item.bg,
        px: 2,
        py: 2,
        borderRadius: 1,
        fontFamily: 'Oswald',
        fontWeight: 600,
        width: '90%', 
      }}
    >
      <Box
        component="img"
        src={item.img}
        alt={`logo-${i}`}
        sx={{ width: '15%' }}
      />
      <Typography variant="body2" sx={{ whiteSpace: 'normal' }}>
        {item.text}
      </Typography>
    </Box>
  ))}
</Box>


            <Button
              variant="contained"
              sx={{
                mt: {xs:1,md:3},
                bgcolor: '#F3274C',
                color: '#fff',
                px: 4,
                fontFamily: 'Oswald',
              }}
            >
              Order Now
            </Button>
          </Box>

         
          <Box
            component="img"
            src={ImageAssets.coke}
            alt="Coke"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: { xs: '120px', sm: '180px', md: '200px' },
              zIndex: 1,
            }}
          />
        </Box>

      
      <Box
          sx={{
            display:{xs:'none',md:'flex'},
            flex: 1,
            backgroundImage: `url(${ImageAssets.right})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: { xs: '300px', md: 'auto' },
          }}
        />
      </Box>

      
      <Box
        component="img"
        src={ImageAssets.down}
        alt="Popular Dishes"
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </Box>
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }}><Box
        component="img"
        src={ImageAssets.four}
        alt="Popular Dishes"
        sx={{
          width: '70%',
         
        //   height: 'auto',
        //   display: 'block',
        }}
      /></div>
    
    </>
  );
};

export default Trending;
