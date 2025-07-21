import * as React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ImageAssets } from '../ImageAssets'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PrimaryButton from '../Common/PrimaryButton';

const FeatureSection = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        backgroundColor: '#fff',
      }}
    >
   
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: 4,
        }}
      >
     
        <Box
          component="img"
          src={ImageAssets.organic}
          alt="organic"
          sx={{
            width: { xs: '180px', sm: '250px', md: '250px' },
            height: {xs:'10%',sm:'360px'},
            borderRadius: '180px',
            objectFit: 'cover',
          }}
        />

      
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '400px',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: '#F3274C',
              fontFamily: 'Fredoka One',
              fontSize: '14px',
            }}
          >
            WELCOME TO FOODIO
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Fredoka One',
          
              mt: 1,
              mb: 2,
            }}
          >
            Feel The Taste <br /> of Foods
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: '#555',
              mb: 2,
              fontFamily: 'Epilogue',
            }}
          >
            Nisl quam nestibulum ac quam nec odio elementu
            <br />
            
aucan ligula. Orci varius natoque pena tibus et maum
ac quam nec odio rbine.
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
            
              fontFamily: 'Fredoka One',
            }}
          >
            Monday to Friday – 11:30 TO 2:00
            <br />
            <span style={{ textDecoration: 'underline' }}>
              +44 1298 123 987
            </span>
          </Typography>
        </Box>

     
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>

  <Box
    component="img"
    src={ImageAssets.cook}
    alt="cook"
    sx={{
      width: '280px',
      height: '178px',
      borderRadius: '180px',
      objectFit: 'cover',
    }}
  />

 
  <Box sx={{ position: 'relative', width: '140px', height: '140px',display:{xs:'none',sm:'block'} }}>
   
    <Box
      component="img"
      src={ImageAssets.garnishborder}
      alt="garnish-border"
      sx={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'contain',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />

    
    <Box
      component="img"
      src={ImageAssets.garnish}
      alt="garnish"
      sx={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'contain',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
      }}
    />
  </Box>
</Box>
        </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 4, md: 6 },
          mt: 4,
        }}
      >
        <Typography
            sx={{
              fontSize: '36px',
              mb: 2,
              fontFamily: 'Fredoka One',
            }}
          >
            Good Food <br />
            Steak & Great <br />
            Restaurant
          </Typography>
        <Box sx={{ position: 'relative', width: { xs: '220px', sm: '280px', md: '320px' } }}>

  <Box
    component="img"
    src={ImageAssets.good}
    alt="good"
    sx={{
      width: '100%',
      height: 'auto',
      borderRadius: '50%',
      objectFit: 'cover',
    }}
  />


  <Box
    component="img"
    src={ImageAssets.percentage}
    alt="percentage"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100px', 
      height: '100px',
    }}
  />
</Box>

    
        <Box>
         

     
          {[
            'Quality foods natural gradient',
            'Award-winning Restaurant',
            'Healthy Food',
            'Individually styled bedrooms',
          ].map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <CheckCircleIcon color="success" fontSize="small" />
              <Typography sx={{ fontSize: '14px', fontFamily: 'Fredoka One' }}>{item}</Typography>
            </Box>
          ))}

          <Box sx={{ mt: 3 }}>
            <PrimaryButton name="Reserve a Table" to="/enquire" />
          </Box>
          
        </Box>
        
      </Box>
      <Typography
        sx={{
          fontSize: '22px',
          fontFamily: 'Fredoka One',
          textAlign: 'center',
          mt: 2,
        }}
      >
        HIGHLY TRUSTED SPONSOR
      </Typography>
      <Box>
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: {xs:'center',md:'space-around'},
            alignItems: 'center',
            gap: 8,
            mt: 2,
        }}>
          <img src={ImageAssets.c1} alt="Sponsor 1" style={{width:'80px',height:'80px'}} />
          <img src={ImageAssets.c2} alt="Sponsor 2" style={{width:'80px',height:'80px'}}/>
          <img src={ImageAssets.c3} alt="Sponsor 3" style={{width:'80px',height:'80px'}}/>
          <img src={ImageAssets.c4} alt="Sponsor 4" style={{width:'80px',height:'80px'}}/>
          <img src={ImageAssets.c5} alt="Sponsor 5" style={{width:'80px',height:'80px'}}/>
          <img src={ImageAssets.c6} alt="Sponsor 6" style={{width:'80px',height:'80px'}}/>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureSection;
