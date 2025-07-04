import React from 'react';
import { Box, Typography, Grid, Button, TextField } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const news = [
  { img: ImageAssets.img1, title: 'Creamy Chicken Alfredo', date: 'April 6, 2025' },
  { img: ImageAssets.img2, title: 'Air Fryer Salmon', date: 'April 6, 2025' },
  { img: ImageAssets.img1, title: 'Supporting food flavors', date: 'April 6, 2025' },
];

const Experience = () => (
  <Box>
    
    <Box
      sx={{
        backgroundImage: `url(${ImageAssets.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        py: { xs: 6, md: 30 },
        px: { xs: 2, md: 12 },
        color: '#fff',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width:'390px' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold', mb: 1,  }}>
            THANKS FOR WATCH VIDEO
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Fredoka One',
              fontSize: { xs: '24px', md: '36px' },
              mb: 2,
              color: '#fff',
            }}
          >
            Highlighting Its Unique Features and Experiences
          </Typography>
          <Box
            sx={{
              backgroundColor: '#FFD700',
              display: 'inline-block',
              px: 1.5,
              py: 2,
              width:'100px',
              padding: '20px',
              color: '#000',
              fontWeight: 600,
              fontSize: '14px',
              borderRadius: '4px',
              mt: 1,
            }}
          >
            14 Years Experience<br></br>
             ⭐⭐⭐⭐⭐
          </Box>
          </div>
          
        </Grid>
       <Grid item xs={12} md={6} sx={{ position: 'relative', minHeight: '320px' }}>
  <Box sx={{ position: 'relative', width: '100%', height: '100%',marginLeft:'100px' }}>
    
    <Box
      component="img"
      src={ImageAssets.e1}
      alt="e1"
      sx={{
        position: 'absolute',
        top: -120,
        right: { xs: '30%', md: '-100px' },
        width: { xs: 80, md: 150 },
        height: { xs: 80, md: 150 },
        borderRadius: '50%',
        border: '4px solid #FFD700',
        p: 0.5,
       
      }}
    />

    
    <Box
      component="img"
      src={ImageAssets.e2}
      alt="e2"
      sx={{
        position: 'absolute',
        top: { xs: '60px', md: '70px' },
        right: { xs: '10%', md: '-100px' },
        width: { xs: 80, md: 150 },
        height: { xs: 80, md: 150 },
        borderRadius: '50%',
        border: '4px solid #FFD700',
        p: 0.5,
       
      }}
    />

   
    <Box
      component="img"
      src={ImageAssets.e3}
      alt="e3"
      sx={{
        position: 'absolute',
        top:'-30px',
        left: { xs: '30%', md: '200px' },
        width: { xs: 80, md: 150 },
        height: { xs: 80, md: 150 },
        borderRadius: '50%',
        border: '4px solid #FFD700',
        p: 0.5,
      
      }}
    />
  </Box>
</Grid>

      </Grid>
    </Box>

  
    <Box sx={{ px: { xs: 2, md: 12 }, py: 6, textAlign: 'center' }}>
      <Typography
        sx={{
          fontFamily: 'Fredoka One',
          fontSize: { xs: '24px', md: '30px' },
          mb: 4,
        }}
      >
        Recent <span style={{ color: '#FFD700' }}>News</span>
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {news.map((item, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4}>
            <Box sx={{ borderRadius: 2,bgcolor: '#fff' }}>
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '320px', height: '200px',borderRadius: '20px', objectFit: 'cover' }}
              />
              <Box sx={{ p: 2, textAlign: 'left' }}>
                <Typography sx={{ fontSize: '12px', color: '#888' }}>
                  {item.date}
                </Typography>
                <Typography
                  sx={{ fontFamily: 'Fredoka One', fontSize: '16px', mt: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '12px', mt: 1,display:'flex',justifyContent:'flex-start',alignItems:'center' }}>
                  <img src={ImageAssets.cheif} alt="User Icon" style={{width:'20%',height:'20%',borderRadius:'50%',float:'left',marginRight:'8px'}}/>
                  <strong > William Thomas</strong>
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

   <Box sx={{ px: { xs: 2, md: 30 }, pb: 10, }}>
  
  <Typography
    sx={{
      fontSize: '12px',
      fontWeight: 600,
      color: '#F3274C',
      mb: 1,
      textAlign: { xs: 'center', md: 'left' },
    }}
  >
    GET IN TOUCH
  </Typography>
  <Typography
    sx={{
      fontFamily: 'Fredoka One',
      width: '50%',
      fontSize: { xs: '20px', md: '36px' },
      mb: 4,
      textAlign: { xs: 'center', md: 'left' },
    }}
  >
    Reservation Table & Enjoy Dining Table
  </Typography>

 
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 6,
    }}
  >
    
    <Box sx={{ flex: 1 }}>
      {[
        { icon: '📞', label: 'For Booking', value: '+1 (888) 999 66' },
        { icon: '✉️', label: 'Email Address', value: 'info@domain.com' },
        { icon: '📍', label: 'New Location', value: 'New Street Town 5785 (US)' },
      ].map((item, idx) => (
        <Box
          key={idx}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 5,
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FFD700',
              width: 34,
              height: 34,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              mr: 2,
            }}
          >
            {item.icon}
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '14px' ,color:'#F3274C'}}>
              {item.label}
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>{item.value}</Typography>
          </Box>
        </Box>
      ))}
    </Box>

  
    <Box sx={{ flex: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      
        <TextField
          fullWidth
          placeholder="No. of Guest"
          size="small"
          variant="outlined"
        />

        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            fullWidth
            placeholder="Full Name"
            size="small"
            variant="outlined"
          />
          <TextField
            fullWidth
            placeholder="Phone No"
            size="small"
            variant="outlined"
          />
        </Box>

        
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            fullWidth
            placeholder="Date"
            size="small"
            variant="outlined"
          />
          <TextField
            fullWidth
            placeholder="Time"
            size="small"
            variant="outlined"
          />
        </Box>

     
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#F3274C',
              height: '40px',
              fontWeight: 600,
              px: 4,
              '&:hover': {
                backgroundColor: '#d81e3e',
              },
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
</Box>

  </Box>
);

export default Experience;
