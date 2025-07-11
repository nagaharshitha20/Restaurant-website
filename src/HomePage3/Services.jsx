import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import PrimaryButton from '../Common/PrimaryButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import CarouselCard from '../Common/CarouselCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  { icon: ImageAssets.tea, label: 'Afternoon Tea' },
  { icon: ImageAssets.shop, label: 'Takeaway & Delivery' },
  { icon: ImageAssets.juice, label: 'Wine & Cocktails' },
  { icon: ImageAssets.donought, label: 'Alfresco Dining' },
];

const Services = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: '20px',
        backgroundColor: '#f8fbff',
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        mt: { xs: '56px', sm: '64px' },
        px: { xs: 2, md: 0 },
      }}
    >
      <Box sx={{ width: '100%', mt: { xs: '40px', md: '100px' } }}>
      
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: {
              xs: 'flex-start',
              md: 'flex-start',
              lg: 'center', 
            },
            px: { xs: 3, sm: 18, md: 12, lg: 25 },
            minHeight: { lg: '150px' },
            gap: { xs: 4, md: 6, lg: '30px' }, 
          }}
        >
       
          <Box sx={{ flex: 1, }}>
         
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'Fredoka One',
                  color: '#EE3A43',
                  fontSize: '12px',
                  mb: 1,
                  textAlign: 'left',
                }}
              >
                FOOD SERVICES
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Fredoka One',
                  fontSize: { xs: '22px', md: '32px' },
                  maxWidth: { xs: '100%', md: '300px' },
                  mb: 2,
                  lineHeight: 1.3,
                  textAlign: 'left',
                }}
              >
                We Provide Best Services
              </Typography>
            </Box>

           
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'flex-start',
                width: '100%',
                gap: 6,
                mt: 4,
              }}
            >
              {services.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent:'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '160px',
                  }}
                >
                  <Box
                    sx={{
                      width: '90px',
                      height: '90px',
                      backgroundColor: '#FFD40D',
                      padding: '12px',
                      borderRadius: '50%',
                      border: '2px solid #000',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 1.5,
                    }}
                  >
                    <img
                      src={service.icon}
                      alt={service.label}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                  <Box sx={{ textAlign: 'left',}}>
                    <Typography
                      sx={{
                        fontFamily: 'Fredoka One',
                        fontSize: '16px',
                        mb: 0.5,
                      }}
                    >
                      {service.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Epilogue',
                        fontSize: '13px',
                        color: '#555555',
                      }}
                    >
                      Nisl quam nestibu lum ac quam nec aucan ligula Orci varius.
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

         
          <Box>
            <Box
              component="img"
              src={ImageAssets.bendi}
              alt="Grill Chicken"
              sx={{
                width: '100%',
                maxWidth: '300px',
                borderRadius: '12px',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Box>
     
<Typography
  sx={{
    fontFamily: 'Fredoka One',
    fontSize: { xs: 22, sm: 28 },
    textAlign: 'center',
    mt: 8,
    mb: 4,
  }}
>
  A Collection of Unique Experiences
</Typography>


<Grid container spacing={15} justifyContent="center">
 
  <Grid item xs={12} sm={6} md={6}>
    <Box
      sx={{
        width: 180,
        height: 180,
        borderRadius: '50%',
        backgroundColor: '#fff',
        border: '2px solid #FFD40D',
        p: 2,
        position: 'relative',
        mx: 'auto',
        overflow: 'visible',
      }}
    >
    
      <Box
        component="img"
        src={ImageAssets.n1}
        alt="Valentine Experience"
        sx={{
          width: 180,
          height: 240,
          borderRadius: 2,
          position: 'absolute',
          top: '-5%',
          right: '-100px',
          zIndex: 2,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      
      />
     
      <Box sx={{ mt: 4, textAlign: 'left', px: 2 }}>
        <Typography sx={{ fontFamily:'Fredoka One', fontSize: 14, mb: 1 }}>
          Valentine's Day <br/>Private Table
        </Typography>
        <Typography sx={{ fontSize: 10, color: '#444' }}>Candle Light Dinner</Typography>
        <Typography sx={{ fontSize: 10, color: '#444' }}> Red Wine</Typography>
        <Typography sx={{ fontSize: 10, color: '#444' }}> Romantic Music</Typography>
        <Typography sx={{ fontSize: 10, color: '#444' }}>Quality Food</Typography>
      </Box>
    </Box>
  </Grid>

 
  <Grid item xs={12} sm={6} md={4}>
    <Box
      sx={{
         width: 180,
        height: 180,
        borderRadius: '50%',
        backgroundColor: '#fff',
        border: '2px solid #FFD40D',
        p: 2,
        position: 'relative',
        mx: 'auto',
        overflow: 'visible',
      }}
    >
    
      <Box
        component="img"
        src={ImageAssets.n2}
        alt="Birthday Experience"
        sx={{
           width: 180,
          height: 240,
          borderRadius: 2,
          position: 'absolute',
          top: '-5%',
          right: '-100px',
          zIndex: 2,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      />
    
      <Box sx={{ mt: 4, textAlign: 'left', px: 2 }}>
        <Typography sx={{ fontFamily: 'Fredoka One', fontSize: 14, mb: 1 }}>
          Birthday Party <br/>Special
        </Typography>
        <Typography sx={{ fontSize: 10, color: '#444' }}>🎂 Cake & Pastries</Typography>
        <Typography sx={{ fontSize: 10, color: '#444' }}>🥤 Soft Drinks</Typography>
        <Typography sx={{ fontSize: 10, color: '#444' }}>🍽️ Dinner & Chocolates</Typography>
        <Typography sx={{ fontSize: 10, color: '#444' }}>🎉 Balloons & Decor</Typography>
      </Box>
    </Box>
  </Grid>
</Grid>

    </Box>
  );
};

export default Services;
