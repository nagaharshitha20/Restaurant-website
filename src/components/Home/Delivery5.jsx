     
  import React, { useState } from "react";
      import {
        Box,
        Typography,
        Tab,
        Tabs,
        Grid,
      } from "@mui/material";
      import { FoodItems } from "../../Data/FoodItems";
      import NormalButton from "../../Common/NormalButton";
      import PlayButton from "../../Common/PlayButton";
import { ImageAssets } from '../../ImageAssets';
      import { useNavigate } from "react-router-dom";
      
      const tabCategories = FoodItems.map((item) => item.category);
      
      const Delivery5 = () => {
        const navigate=useNavigate();
        const [selectedTab, setSelectedTab] = useState(0);
        const selectedItems = FoodItems[selectedTab]?.items || [];
      
        const promoText = {
          fontSize: 14,
          color: '#FFD43A',
          mb: 1,
        };
      
        const promoTitle = {
          fontSize: { xs: 20, sm: 24, md: 28 },
          fontWeight: 'bold',
          mb: 1,
        };
      
        const promoBox = (bg, content) => (
          <Box
            sx={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              p: { xs: 2, sm: 3 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: { xs: 200, sm: 240, md: '100%' },
              position: 'relative',
            }}
          >
            {content}
          </Box>
        );
      
        return (<>
          <Box sx={{ width: '100%', height: '250px', position: 'relative' }}>
        <Box
          component="img"
          src={ImageAssets.top1}
          alt="Popular Dishes"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
          }}
        >
          <PlayButton />
        </Box>
      </Box>

     
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#EF294C',
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
          py: { xs: 6, md: 8 },
        }}
      >
        <Box component="img" src={ImageAssets.tomato} alt="tomato" sx={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.1, width: 100 }} />
        <Box component="img" src={ImageAssets.chilli} alt="chilli" sx={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, width: 80 }} />

        <Box>
          <Typography variant="body2" sx={{ mb: 1, fontFamily: 'Oswald', fontWeight: 600, fontSize: { xs: 16, md: 14 }, color: '#FFD43A' }}>
            Crispy, Every Bite Taste
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Oswald',
              fontSize: { xs: 26, sm: 32, md: 40 },
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            30 Minutes Fast <br />
            <Box component="span" sx={{ color: '#FFD43A' }}>Delivery</Box> Challenge
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mt: { xs: 4, md: 0 } }}>
          <Box component="img" src={ImageAssets.bike} alt="bike" sx={{ width: { xs: 160, sm: 200, md: 280 }, maxWidth: '100%' }} />
          <NormalButton color="#000" bgcolor="#fff" name="Order Now"   onClick={()=>{navigate('/productsection')}} />
        </Box>
      </Box>


      <Box sx={{ width: '100%', fontFamily: 'Oswald', overflow: 'hidden', mt: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
          <Box
            component="img"
            src={ImageAssets.today}
            alt="today"
            sx={{ width: { xs: '100%', md: '50%' }, height: { xs: 300, sm: 400, md: 600 }, objectFit: 'cover' }}
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gridTemplateRows: '1fr 1fr',
              width: { xs: '100%', md: '50%' },
              height: { xs: 'auto', md: 600 },
              flex: 1,
            }}
          >
            {promoBox(ImageAssets.background1, (
              <>
                <Typography sx={promoText}>Delicious</Typography>
                <Typography sx={promoTitle}>Burger Combo</Typography>
                <Typography sx={{ fontSize: 14 }}>This Weekend Only</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                  Limited Offer / <span style={{ color: '#FFD43A' }}>$5</span>
                </Typography>
                <Box component="button"
                  onClick={()=>{navigate('/shop')}}
                   sx={{
                  backgroundColor: '#FFD43A',
                  color: '#000',
                  mt: 2,
                  px: 3,
                  py: 1,
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                }}>
                  Order Now
                </Box>
              </>
            ))}
            {promoBox(ImageAssets.background3, (
              <>
                <Typography sx={promoText}>Crispy, Every Bite Taste</Typography>
                <Typography sx={promoTitle}>SUPER DELICIOUS</Typography>
                <Box component="img" src={ImageAssets.off} sx={{ width: 100, height: 100, borderRadius: '50%' }} />
              </>
            ))}
            {promoBox(ImageAssets.background2, (
              <>
                <Typography sx={promoText}>Crispy, Every Bite Taste</Typography>
                <Typography sx={promoTitle}>FASH FOOD MEAL</Typography>
                <Typography sx={{ fontSize: 14 }}>The mouth-watering aroma of sizzling burgers</Typography>
                <Box component="img" src={ImageAssets.ch2} alt="fries" sx={{ position: 'absolute', right: 20, bottom: 10, width: 100 }} />
                <Box component="button" 
                onClick={()=>{navigate('/productsection')}}
                sx={{
                  backgroundColor: '#FFD43A',

                  color: '#000',
                  mt: 3,
                  px: 3,
                  py: 1,
                  border: 'none',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                }}>
                  Order Now
                </Box>
              </>
            ))}
            {promoBox(ImageAssets.background4, (
              <>
                <Box component="img" src={ImageAssets.ch2} alt="fries" sx={{ position: 'absolute', right: 20, bottom: 10, width: 100 }} />
                <Box component="img" src={ImageAssets.off2} sx={{ width: 160 }} />
              </>
            ))}
          </Box> 
         </Box> 
      </Box>
      
         
          </>
        );
      };
      
      export default Delivery5;
      