import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NormalButton from '../Common/NormalButton';
import { ImageAssets } from '../ImageAssets';
import PlayButton from '../Common/PlayButton';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const CoverPage6 = () => {
  const navigate=useNavigate();
  return (
   <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '25vh', sm: '60vh', md: '100vh' },
        overflow: 'hidden',
        mx:'auto',
       margin: { xs: 1.3, sm: 2.5,md:0 },
        mt: { xs: '66px', sm: '64px' },
      }}
    >
     
      <Box
        component="img"
        src={ImageAssets.cover6}
        alt="cover"
        sx={{
          width: { xs: '95%', md: '100%' },
          height: { xs: '25vh', sm: '60vh', md: '100vh' },
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: { xs: '30px', sm: '30px', md: 0 },
          zIndex: 0,
        }}
      />

      
      <Box
        sx={{
          position: {
            xs: 'absolute',
            sm: 'absolute',
          },
          top: {
            xs: '0',
            sm: '50%',
          },
          left: {
            xs: '0',
            sm: 0,
            md: '180px',
          },
          transform: {
            xs: 'translateY(-40%)',
            sm: 'translateY(-50%)',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', sm: 'flex-start' },
          justifyContent: 'center',
          width: {
            xs: '90%',
            sm: '80%',
            md: '600px',
          },
          px: { xs: 3, sm: 4 },
          zIndex: 1,
          color: '#FFFFFF',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
       
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Oswald',
            fontSize: { xs: '6.5vw', sm: '6vw', md: '7.5vw' },
            textAlign: 'left',
            mt: { xs: '35vw',sm:'0vw',md:'0vw',lg:'0vw' },
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          AWESOME <br/>
         DELICIOUS PIZZA
        </Typography>

       
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Oswald',
            fontSize: { xs: '3vw', sm: '2.5vw', md: '20px' },
           
            textAlign: 'left',
            mb: { xs: 3, sm: 2 },
            lineHeight: 1.5,
            maxWidth: '100%',
          }}
        >
          Star Your Order Just Only $25.00
        </Typography>

       
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: { xs: 2, sm: 3 },
            width: '100%',
          }}
        >
          {/* <NormalButton
            name="Order Now"
           bgcolor="#FFC222"
           color="#000"
          /> */}
          <Button onClick={()=>{navigate('/fastfood')}} style={{
           backgroundColor:'#FFC222',
           border:'none',
           padding:'10px 20px',
           borderRadius:0,
           color:"#000",
          
           fontWeight:'bold',fontFamily:'Oswald'}}>Order Now
           < ArrowForwardIcon/> </Button>
          
        </Box>
      </Box>

     
      
<Box
  component="img"
  src={ImageAssets.decor1}
  alt="decor1"
  sx={{
    position: 'absolute',
    top: { xs: '10%', md: '8%' },
    left: { xs: '5%', md: '10%' },
    width: { xs: '40px', sm: '60px', md: '80px' },
    opacity: 0.5,
    zIndex: 0,
  }}
/>

<Box
  component="img"
  src={ImageAssets.decor3}
  alt="decor2"
  sx={{
    position: 'absolute',
    top: { xs: '15%', md: '8%' },
    right: { xs: '8%', md: '50%' },
    // width: { xs: '40px', sm: '60px', md: '80px' },
    opacity: 0.5,
    zIndex: 0,
  }}
/>

<Box
  component="img"
  src={ImageAssets.decor2}
  alt="decor3"
  sx={{
    position: 'absolute',
    bottom: { xs: '5%', md: '10%' },
    left: { xs: '10%', md: '5%' },
    width: { xs: '40px', sm: '60px', md: '80px' },
    opacity: 0.5,
    zIndex: 0,
  }}
/>

    </Box>
    
  );
};

export default CoverPage6;
