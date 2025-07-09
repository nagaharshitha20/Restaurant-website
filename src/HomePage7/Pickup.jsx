import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import ExploreButton from '../Common/ExploreButton';

const Pickup = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#fff', py: { xs: 6, md: 10 }, px: 2 }}>
      {/* Top Section */}
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 6, md: 4 },
          mb: { xs: 6, md: 8 },
        }}
      >
        {/* Left Block */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography sx={{ fontFamily: 'Playball', color: '#008000', fontSize: { xs: 20, md: 24 } }}>
            We Guarantee
          </Typography>
          <Typography sx={{ fontWeight: 'bold', fontSize: { xs: 24, md: 30 }, my: 1 }}>
            30 Minutes Delivery!
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#555', mb: 2 }}>
            30-Minutes Delivery Guaranteed! Botanica is the only food company that guarantees your
            order will arrive within 30 minutes or we’ll give you a free Regular.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1 }}>
            <Box component="img" src={ImageAssets.groupicon} alt="groupicon" sx={{ width: 28 }} />
            <Typography sx={{ fontWeight: 600, color: '#EF1B48', fontSize: 16 }}>
              Call Us Free : <br />
              <span style={{ color: '#000' }}>+1 234-567-890</span>
            </Typography>
          </Box>
        </Box>

        {/* Center Image */}
        <Box
          component="img"
          src={ImageAssets.deliveryboy}
          alt="deliveryboy"
          sx={{ width: { xs: '70%', md: '30%' }, maxWidth: 280 }}
        />

        {/* Right Block */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'right' } }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: { xs: 20, md: 24 }, mb: 1 }}>
            Choose what you want
            <br />
            select a pick up time
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#555', mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eu neque congue
            pellentesque ut non ligula. Duis dignissim feugiat quam.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <ExploreButton name="Learn More" />
          </Box>
        </Box>
      </Box>

<Box
  sx={{
    maxWidth: '1200px',
    mx: 'auto',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {/* Column 1 */}
  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
    <Box
      component="img"
      src={ImageAssets.offer1}
      alt="offer1"
      sx={{
        width: '70%',
        height: { xs: '160px', md: '230px' },
        objectFit: 'cover',
        borderRadius: 2,
      }}
    />
    <Box
      component="img"
      src={ImageAssets.offer2}
      alt="offer2"
      sx={{
        width: '70%',
        height: { xs: '160px', md: '230px' },
        objectFit: 'cover',
        borderRadius: 2,
      }}
    />
  </Box>

  {/* Column 2 */}
  <Box sx={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
    <Box
      component="img"
      src={ImageAssets.offer3}
      alt="offer3"
      sx={{
        width: '100%',
        maxWidth: '100%',
        height: { xs: '330px', md: '480px' },
        objectFit: 'cover',
        borderRadius: 2,
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        color: '#fff',
      padding:'50px 60px',
        // px: 2,
      }}
    >
      <Typography sx={{ fontWeight: 'bold', fontSize: { xs: 16, md: 18 }, mb: 1 }}>
        Premium Quality
        <br />
        Filet mignon
      </Typography>
      <ExploreButton name="Order Now" bgcolor="#007A4B" />
    </Box>
  </Box>

  {/* Column 3 */}
  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
    <Box
      component="img"
      src={ImageAssets.offer4}
      alt="offer4"
      sx={{
        width: '60%',
        height: { xs: '330px', md: '480px' },
        objectFit: 'cover',
        borderRadius: 2,
      }}
    />
  </Box>
</Box>


    </Box>
  );
};

export default Pickup;
