import * as React from 'react';
import { Box, Typography ,Grid} from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import PrimaryButton from '../Common/PrimaryButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import CarouselCard from '../Common/CarouselCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Breakfast = [
  {
    title: 'Dasi Breakfast',
    desc: 'Sausage, three rashers of streaky bacon, two fried eggs',
    price: '$12.00',
  },
  {
    title: 'Three Meat Skillet',
    desc: 'Hickory House bacon, sausage, ham, cheddar cheese, two eggs',
    price: '$9.00',
  },
  {
    title: 'Breakfast Bowl',
    desc: 'Three eggs, tater tots, choice of bacon or sausage, shredded cheese',
    price: '$14.00',
  },
  
];
const Lunch = [
  {
    title: 'Dasi Breakfast',
    desc: 'Sausage, three rashers of streaky bacon, two fried eggs',
    price: '$12.00',
  },
  {
    title: 'Three Meat Skillet',
    desc: 'Hickory House bacon, sausage, ham, cheddar cheese, two eggs',
    price: '$9.00',
  },
  {
    title: 'Breakfast Bowl',
    desc: 'Three eggs, tater tots, choice of bacon or sausage, shredded cheese',
    price: '$14.00',
  },
  
];
const Dinner = [
  {
    title: 'Dasi Breakfast',
    desc: 'Sausage, three rashers of streaky bacon, two fried eggs',
    price: '$12.00',
  },
  {
    title: 'Three Meat Skillet',
    desc: 'Hickory House bacon, sausage, ham, cheddar cheese, two eggs',
    price: '$9.00',
  },
  {
    title: 'Breakfast Bowl',
    desc: 'Three eggs, tater tots, choice of bacon or sausage, shredded cheese',
    price: '$14.00',
  },
  
];
 const services = [
  { icon: ImageAssets.tea, label: 'Afternoon Tea' },
  { icon: ImageAssets.shop, label: 'Takeaway & Delivery' },
  { icon: ImageAssets.juice, label: 'Wine & Cocktails' },
  { icon: ImageAssets.donought, label: 'Alfresco Dining' },
];
const Menu = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height:'100%',
        padding: '20px',
        backgroundColor: '#f8fbff',
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        mt: { xs: '56px', sm: '64px' },
        
        px: { xs: 2, md: 0},
      }}
    >
      
      <Typography
        sx={{
         fontFamily: 'Fredoka One',
          fontSize: '35px',
          textAlign: 'center',
          marginTop: '50px',
          
        }}
      >
        Delicious Menu
      </Typography>
      <Box
              sx={{
                width: '155px',
                height: '6px',
                backgroundColor: '#FFD700',
                mx: 'auto',
                mb: 6,
                borderRadius: '3px',
              }}
            />
            {/* BBQ Box */}
                    <Grid item xs={12} md={6} lg={6}>
                      <div style={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        justifyContent: 'center',
                        alignItems: 'center',
                                             
                      }}>
                        <Box
                        sx={{
                          backgroundColor: '#FFFFFF01',
                          borderRadius: '20px',
                          width: '100%',
                          maxWidth: { xs: '100%', lg: '250px' },
                          mx: 'auto',
                          p: { xs: 3, md: 4, lg: 10 },
                          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '20px', md: '24px' },
                            mb: 2,
                            fontFamily: 'Fredoka One',
                            textAlign: { xs: 'center', md: 'left' },
                            ml: { xs: 0,  },
                          }}
                        >
                          Breakfast
                        </Typography>

                        {Breakfast.map((item, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              borderBottom: '1px dashed #ccc',
                              pb: 2,
                              mb: 2,
                              ml: { xs: 0,  },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                flexWrap: 'wrap',
                              }}
                            >
                              <Typography sx={{ fontFamily: 'Fredoka One' }}>
                                {item.title}
                              </Typography>
                              <Typography
                                sx={{
                                  color: '#F3274C',
                                  fontFamily: 'Fredoka One',
                                }}
                              >
                                {item.price}
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: '#666',
                                fontFamily: 'Epilogue',
                                mt: 0.5,
                              }}
                            >
                              {item.desc}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                        <Box
                        sx={{
                          backgroundColor: '#FFFFFF01',
                          borderRadius: '20px',
                          width: '100%',
                          maxWidth: { xs: '100%', lg: '250px' },
                          mx: 'auto',
                          p: { xs: 3, md: 4, lg: 10 },
                          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '20px', md: '24px' },
                            mb: 2,
                            fontFamily: 'Fredoka One',
                            textAlign: { xs: 'center', md: 'left' },
                            ml: { xs: 0,  },
                          }}
                        >
                          Lunch
                        </Typography>

                        {Breakfast.map((item, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              borderBottom: '1px dashed #ccc',
                              pb: 2,
                              mb: 2,
                              ml: { xs: 0,  },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                flexWrap: 'wrap',
                              }}
                            >
                              <Typography sx={{ fontFamily: 'Fredoka One' }}>
                                {item.title}
                              </Typography>
                              <Typography
                                sx={{
                                  color: '#F3274C',
                                  fontFamily: 'Fredoka One',
                                }}
                              >
                                {item.price}
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: '#666',
                                fontFamily: 'Epilogue',
                                mt: 0.5,
                              }}
                            >
                              {item.desc}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                        <Box
                        sx={{
                          backgroundColor: '#FFFFFF01',
                          borderRadius: '20px',
                          width: '100%',
                          maxWidth: { xs: '100%', lg: '250px' },
                          mx: 'auto',
                          p: { xs: 3, md: 4, lg: 10 },
                          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '20px', md: '24px' },
                            mb: 2,
                            fontFamily: 'Fredoka One',
                            textAlign: { xs: 'center', md: 'left' },
                            ml: { xs: 0,  },
                          }}
                        >
                          Dinner
                        </Typography>

                        {Breakfast.map((item, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              borderBottom: '1px dashed #ccc',
                              pb: 2,
                              mb: 2,
                              ml: { xs: 0,  },
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'baseline',
                                flexWrap: 'wrap',
                              }}
                            >
                              <Typography sx={{ fontFamily: 'Fredoka One' }}>
                                {item.title}
                              </Typography>
                              <Typography
                                sx={{
                                  color: '#F3274C',
                                  fontFamily: 'Fredoka One',
                                }}
                              >
                                {item.price}
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: '#666',
                                fontFamily: 'Epilogue',
                                mt: 0.5,
                              }}
                            >
                              {item.desc}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      </div>
                      
                    </Grid>
<Box sx={{ width: '100%', mt: { xs: '40px', md: '100px' } ,}}>

<Box
sx={{
display: 'flex',
flexDirection: { xs: 'column', md: 'row' },
justifyContent: 'center',
alignItems: {
xs: 'flex-start',
md: 'flex-start',
lg: 'flex-start', 
},
gap: 10,
px: { xs: 3,sm:18, md: 12 ,lg:25},
minHeight: { lg: '150px' }, 
}}
>


<Box sx={{ flex: 1 }}>
  <Typography
    sx={{
      fontFamily: 'Fredoka One',
      color: '#EE3A43',
      fontSize: '12px',
      mb: 1,
      textAlign: { xs: 'left', md: 'left' }, 
    }}
  >
    BEST SOLUTIONS
  </Typography>
  <Typography
    sx={{
      fontFamily: 'Fredoka One',
      fontSize: { xs: '22px', md: '34px' },
      maxWidth: { xs: '100%', md: '300px' },
      mb: 2,
      lineHeight: 1.3,
      textAlign: { xs: 'left', md: 'left' },
    }}
  >
    We Provide Best Services
  </Typography>
</Box>


<Box sx={{ flex: 1, maxWidth: '480px' }}>
  <Typography
    sx={{
      fontSize: { xs: '14px', md: '15px' },
      fontFamily: 'Epilogue',
      mb: 2,
      lineHeight: 1.6,
      textAlign: { xs: 'left', md: 'left' },
    }}
  >
    Nisl quam nestibu lum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena
    tibus et urient monte nascete ridiculus mus nellentesq um ac quam nec odio ribne. Nisl
    quam nestibu aucan ligula.
  </Typography>
  
</Box>

</Box>
        

<Box
sx={{
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'center',
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
alignItems: 'center',
textAlign: 'center',
maxWidth: '220px',
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
  ))}
</Box>

                          </Box>
    </Box>
  );
};

export default Menu;
