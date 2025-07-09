import React from 'react';
import { Box, Typography, Grid, Card, CardContent, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import InstagramIcon from '@mui/icons-material/Instagram';
const instaImages = [
  ImageAssets.f1,
  ImageAssets.f2,
  ImageAssets.f3,
  ImageAssets.f4,
  ImageAssets.f1,
];
const InstaFollow=()=>{
return(<Box sx={{ px: 2, py: 8, backgroundColor: "#fff", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: 30,
            color: "#000",
           fontFamily:'Fredoka One',
            mb: 1,
          }}
        >
         <InstagramIcon style={{backgroundColor:'#EF294C',padding:'15px',borderRadius:'50%',width:'35px',height:'35px',color:'#fff',}}/><br/>
          Follow <b>@shawonetc3</b>
        </Typography>
        <Typography sx={{ fontSize: 12, mb: 4 }}>Join our community to inspire your desires</Typography>
    
        {/* Image Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            px: 1,
          }}
        >
          {instaImages.map((img, idx) => (
            <Box
              key={idx}
              component="img"
              src={img}
              alt={`insta-${idx}`}
              sx={{
                width: { xs: "40%", sm: "280px" },
                height: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          ))}
        </Box>
        </Box>);
}
export default InstaFollow;
