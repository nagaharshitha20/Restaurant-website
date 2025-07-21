import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import ExploreButton from '../Common/ExploreButton';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonial = () => {
 return ( <>
    <Box sx={{ width: '100%',  py: { xs: 6, md: 10 }, bgcolor: '#fff',mx:'auto'
 }}>


      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
         
          gap: 4,
          mb: 6,
        }}
      >
     
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${ImageAssets.greybg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 400,
            width:'80%',
            borderTopRightRadius:'30px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={ImageAssets.family}
            alt="Family"
            sx={{
              width: { xs: '80%', md: '55%' },
            
            }}
          />
        </Box>

      
        <Box sx={{ flex: 1, px: { xs: 2, md: 4 }, textAlign: { xs: 'center', md: 'center' } }}>
        
          <Typography sx={{ fontFamily: 'Playball', color: '#008000', fontSize: 22, mb: 1 }}>
            Testimonial
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>
            Customer Say About Us
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#555', mb: 2 }}>
             <FormatQuoteIcon sx={{ fontSize: 40, color: '#ccc', mb: -2 }} /> Customer service is really fast, and this developer makes great quality themes!
            I would recommend this theme for all Shopify platforms.
          </Typography>

          {/* Stars */}
          <Box sx={{ display: 'flex', gap: 0.5, justifyContent: { xs: 'center', md: 'center' }, mb: 1 }}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} fontSize="small" sx={{ color: '#FFD700' }} />
            ))}
          </Box>

          <Typography sx={{ fontSize: 14, fontStyle: 'italic' }}>
            Customer – From Envato
          </Typography>
        </Box>
      </Box>
    </Box>
   </>
  );
};

export default Testimonial;
