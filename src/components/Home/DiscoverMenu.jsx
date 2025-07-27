import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../../ImageAssets';
import PrimaryButton from '../../Common/PrimaryButton';
import { Snackbar, Alert } from '@mui/material';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay, Pagination } from 'swiper/modules';
// import CarouselCard from '../Common/CarouselCard';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'Epilogue',
};

const featuredDishes = [
  {
    name: 'Crispy Fried Chicken',
    originalPrice: '$14.85',
    price: '$10.85',
    image: ImageAssets.grillchicken,
  },
  {
    name: 'Shroom Bacon Burger',
    originalPrice: '$21.76',
    price: '$11.76',
    image: ImageAssets.bacon,
  },
  {
    name: 'Delicious Black Coffee',
    originalPrice: '$21.76',
    price: '$11.76',
    image: ImageAssets.blackcoffee,
  },
  {
    name: ' Chicken Burger',
    originalPrice: '$21.76',
    price: '$11.76',
    image: ImageAssets.chickenburger,
  },
  {
    name: 'Delicious Black Coffee',
    originalPrice: '$21.76',
    price: '$11.76',
    image: ImageAssets.i2,
  },
  {
    name: 'French Fries ',
    originalPrice: '$21.76',
    price: '$11.76',
    image: ImageAssets.i3,
  },
];

const DiscoverMenu = () => {
  const [formData, setFormData] = React.useState({
  guests: '',
  date: '',
  time: '',
  name: '',
  phone: '',
});
const handleChange = (field) => (e) => {
  setFormData({ ...formData, [field]: e.target.value });
 
};
const [errorAlert, setErrorAlert] = React.useState({ open: false, message: '' });

const validate = () => {
  if (!formData.guests || isNaN(formData.guests) || formData.guests < 1 || formData.guests > 20) {
    setErrorAlert({ open: true, message: 'Please enter between 1 to 20 guests.' });
    return false;
  }

  if (!formData.date || isNaN(new Date(formData.date).getTime())) {
    setErrorAlert({ open: true, message: 'Please enter a valid date.' });
    return false;
  }

  if (!formData.time || !/^([01]\d|2[0-3]):?([0-5]\d)$/.test(formData.time)) {
    setErrorAlert({ open: true, message: 'Please enter time in HH:MM format.' });
    return false;
  }

  if (!formData.name.trim()) {
    setErrorAlert({ open: true, message: 'Full Name is required.' });
    return false;
  }

  if (!formData.phone.match(/^\d{10}$/)) {
    setErrorAlert({ open: true, message: 'Please enter a valid 10-digit phone number.' });
    return false;
  }

  return true;
};
const handleSubmit = () => {
  if (validate()) {
    setOpenSnackbar(true);
    setFormData({ guests: '', date: '', time: '', name: '', phone: '' });
  }
};

const [openSnackbar, setOpenSnackbar] = React.useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: '480px', sm: '630px', md: '710px' },
        mt: { xs: '56px', sm: '64px' },
       mx:'auto',
        // px: { xs: 0, md: 8 },
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
        Discover Menu
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
     
      <Box sx={{ display: 'flex', gap: '25px', justifyContent: 'center',  display: 'flex',alignItems:'center',
                flexDirection:{xs:'column',lg:'row'} }}>
        {[{
          img: ImageAssets.classicsbbq,
          title: 'Steaks & BBQ',
          desc: 'canonical classics to obscure tiki drinks',
          price: '$120',
        }, {
          img: ImageAssets.drinksbbq,
          title: 'Cocktails',
          desc: 'canonical classics to obscure tiki drinks',
          price: '$120',
        }].map((item, idx) => (
          <Box
            key={idx}
            sx={{
              position: 'relative',
              width: {xs:'90%',md:'405px'},
              height: {xs: 'auto',md:'220px'},
              borderRadius: '20px',
              overflow: 'visible',
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
              display:'block',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                padding: '20px',
                width: '250px',
                top: '20px',
                left: '20px',
                color: '#fff',
              }}
            >
              <Typography variant="h4" sx={{    fontFamily: 'Fredoka One', }}>{item.title}</Typography>
              <Typography variant="body2" sx={{ color: 'lightgrey',   fontFamily: 'Epilogue',fontSize:'14px' }}>{item.desc}</Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
               left: { xs: '25px', sm: '30px', md: '50px' },
               bottom: { xs: '-20px', sm: '-20px', md: '-30px' },

                backgroundColor: '#FFD700',
                width: {xs:'40px',md:'70px'},
                height: {xs:'40px',md:'70px'},
                padding:'15px',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F3274C',
                   fontFamily: 'Fredoka One',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 2,
              }}
            >
              <Typography sx={{ fontSize: '20px', lineHeight: 1 ,   fontFamily: 'Fredoka One',}}>{item.price}</Typography>
              <Typography sx={{ fontSize: '14px',   fontFamily: 'Fredoka One',color:'black' }}>person</Typography>
            </Box>
          </Box>
        ))}
      </Box>

  
<Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, px: 2, overflowX: 'hidden' }}>
  <Box
    sx={{
      width: '100%',
      maxWidth: '776.66px',
      height: 'auto',
      borderRadius: '20px',
      backgroundImage: `url(${ImageAssets.bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      px: 5,
      py: 4,
      gap: 4,
    }}
  >
   
    <Box sx={{ width: { xs: '100%', md: '32%' } }}>
      <Typography
        sx={{
          color: 'white',
          fontSize: '36px',
          fontFamily: 'Fredoka One',
          mb: 1,
          lineHeight: 1.3,
        }}
      >
        RESERVE <br /> A TABLE
      </Typography>
      <Box
        sx={{
          width: '120px',
          height: '2px',
          backgroundColor: '#FFD700',
          mb: 1,
          borderRadius: '3px',
        }}
      />
      <Typography sx={{ color: '#fff',opacity:'0.8', fontSize: '14px', fontFamily: 'Epilogue' }}>
        Discover our New Menu !
      </Typography>
    </Box>

   
    <Box
      sx={{
        width: { xs: '100%', md: '70%' },
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        minWidth: 0, 
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <input placeholder="No of Guest" style={inputStyle} value={formData.guests}
  onChange={handleChange('guests')} />
  {/* {errors.guests && <span style={{ color: 'white', fontSize: '12px' }}>{errors.guests}</span>} */}

        <input placeholder="Date" style={inputStyle}  value={formData.date}
  onChange={handleChange('date')}/>
  {/* {errors.date && <span style={{ color: 'white', fontSize: '12px' }}>{errors.date}</span>} */}

        <input placeholder="Time" style={inputStyle}  value={formData.time}
  onChange={handleChange('time')} />
  {/* {errors.time && <span style={{ color: 'white', fontSize: '12px' }}>{errors.time}</span>} */}
      </Box>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <input placeholder="Full Name" style={inputStyle} value={formData.name}
  onChange={handleChange('name')}/>
  {/* {errors.name && <span style={{ color: 'white', fontSize: '12px' }}>{errors.name}</span>} */}

        <input placeholder="Phone No" style={inputStyle} value={formData.phone}
  onChange={handleChange('phone')}
/>
{/* {errors.phone && <span style={{ color: 'white', fontSize: '12px' }}>{errors.phone}</span>} */}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <PrimaryButton
          name="Submit"
          bgcolor="#FFD40D"
          color="black"
          border="#FFD40D"
          width="118px"
          borderwidth="109px"
            onClick={handleSubmit} 
        />
      </Box>
    </Box>
  </Box>
</Box>


      
      {/* <Box
        sx={{
          backgroundColor: '#F5F8FD',
          width: '100%',
         mt: 10,

          py: { xs: 8, md: 10 },
          display: 'flex',
          mt:-20,
          

          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
           fontFamily: 'Fredoka One',
            fontSize: '36px',
            textAlign: 'center',
            mb: 0.5,
            mt:20,
          }}
        >
          Featured Dishes
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
       <Box
  sx={{
    width: '70%',
    // maxWidth: '400px', 
    display: 'flex',
    justifyContent: 'center',
    px: { xs: 0, md: 8 },
  }}
>


          <Swiper
  modules={[Navigation, Autoplay,Pagination]}
  spaceBetween={10} 
 
  slidesPerView={1}
  slidesPerGroup={1}

  autoplay={{ delay: 2000, disableOnInteraction: false }}
  pagination={{ clickable: true}}
  loop={true}
  breakpoints={{
    1024: {
      slidesPerView: 3,      
      slidesPerGroup: 3,     
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
     
    },
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      
    },
  }}
>
  {[...featuredDishes, ...featuredDishes].map((dish, idx) => (
    <SwiperSlide key={idx}>
      <CarouselCard dish={dish} />
    </SwiperSlide>
  ))}
</Swiper>

        </Box>
      </Box> */}
      <Snackbar
  open={openSnackbar}
  autoHideDuration={4000}
  onClose={() => setOpenSnackbar(false)}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
>
  <Alert
    onClose={() => setOpenSnackbar(false)}
    variant="filled"
    sx={{
      backgroundColor: 'rgba(144, 238, 144, 0.2)',
      color: 'green',
      border: '1px solid lightgreen',
      fontWeight: 600,
    }}
  >
    Table Reserved Successfully!
  </Alert>
</Snackbar>
     <Snackbar
  open={errorAlert.open}
  autoHideDuration={4000}
  onClose={() => setErrorAlert({ open: false, message: '' })}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
>
  <Alert
    onClose={() => setErrorAlert({ open: false, message: '' })}
    severity="error"
    variant="filled"
    sx={{
      backgroundColor: '#fdd',
      color: 'red',
      border: '1px solid #f99',
      fontWeight: 600,
    }}
  >
    {errorAlert.message}
  </Alert>
</Snackbar>

    </Box>
  );
};

export default DiscoverMenu;
