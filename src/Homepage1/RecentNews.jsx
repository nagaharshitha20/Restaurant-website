import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import CarouselCard from '../Common/CarouselCard';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NormalButton from '../Common/NormalButton';


const RecentNews=()=>{
return(
     <Box
      sx={{
        position: 'relative',
       width: '100%',
     
        minHeight: { xs: '480px', sm: '600px', md: '270px' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '24px' },
      }}
    >
      
      <Box
        component="img"
        src={ImageAssets.recentbg}
        alt="cover"
        sx={{
          width: '100%',
          height:'300px',
          
       
          objectFit: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          height:{
            xs:'300px',
            sm:'100%',
            md:'100%',
            lg:'100%',
           
          }
        }}
      />
      <Box sx={{  position: 'relative',display:'flex',justifyContent:'center',mt:25 }}>
            
              <Box sx={{ width: { xs: '100%', md: '55%' }, zIndex: 2 ,mr:15,}}>
                <Typography
                  sx={{
                    color: '#F3274C',
                    fontWeight: 'bold',
                    fontSize: '12px',
                
                    mb: 2,
                  }}
                >
                  BEST APP FOR FOODS ORDERING 
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '36px',
                    lineHeight: 1.2,
                    mb: 4,
                  }}
                >
                 Manage Your Restaurant <br />Anytime! Anywhere!<br></br>
                </Typography>
      
             
                    <li style={{listStyleType:'none',fontSize:'20px'}}><TripOriginIcon style={{color:'#FFD40D',fontSize:'15px',}}/> Higher Reach - Minimal Effort </li>
                    <li style={{listStyleType:'none',fontSize:'20px'}}><TripOriginIcon style={{color:'#FFD40D',fontSize:'15px'}}/> Showcase your Brand </li>
                    <li style={{listStyleType:'none',fontSize:'20px'}}><TripOriginIcon style={{color:'#FFD40D',fontSize:'15px'}}/> Exclusive offers & discounts </li>

                
                <div style={{display:'flex',position:'relative',gap:'20px',marginTop:'30px'}}>
                     <NormalButton
                name="Google Play"
                bgcolor="#F3274C"
                color="#FFFFFF"
                
                
              />
              <NormalButton
                name="App Store"
                bgcolor="#000000"
                color="#FFFFFF"
                
              />
                </div>
             <Box
               component="img"
               src={ImageAssets.Delivery}
               alt="Pizza"
               sx={{
                 width: '200px',
                 height: '200px',
                 float:'right',
                position:'relative',
                bottom:'180px',
                right:'150px',
                 objectFit: 'contain',
               }}
             />
           
<Box
  component="img"
  src={ImageAssets.order}
  alt="Order Phone"
  sx={{
    width: '330px',
    position: 'absolute',
    bottom: '90px',
    left: '980px',
    zIndex: 3,
  }}
/>

{/* Cheezy Pizza */}
<Box
  component="img"
  src={ImageAssets.cheezypizza}
  alt="Pizza"
  sx={{
    width: '200px',
    position: 'absolute',
    top: '-40px',
    left: '1190px',
    zIndex: 2,
  }}
/>

{/* Salad */}
<Box
  component="img"
  src={ImageAssets.salad}
  alt="Salad"
  sx={{
    width: '200px',
    position: 'absolute',
    bottom: '210px',
    left: '1280px',
    zIndex: 1,
  }}
/>
 
                </Box>
              </Box>
              
      </Box>
      
      
  );
};

export default RecentNews;
