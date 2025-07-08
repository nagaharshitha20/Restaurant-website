import React from "react";
import { Box, Typography } from "@mui/material";
import { ImageAssets } from "../ImageAssets";
import InstagramIcon from '@mui/icons-material/Instagram';
const blogCards = [
  {
    img: ImageAssets.card1,
    tag: "Fast Food",
    date: "29 Feb 2024",
    title: "Culinary Chronicles Exploring Gastronomic Wonders At Foodking Restaurant",
  },
  {
    img: ImageAssets.card2,
    tag: "Health Care",
    date: "29 Feb 2024",
    title: "Taste Sensations: Navigating The Epicurean Landscape Of Restaurant Name",
  },
  {
    img: ImageAssets.card3,
    tag: "Restaurants",
    date: "29 Feb 2024",
    title: "Epicurean Insights: Blogging Odyssey Through Restaurant Name Culinary Universe",
  },
];

const instaImages = [
  ImageAssets.f1,
  ImageAssets.f2,
  ImageAssets.f3,
  ImageAssets.f4,
  ImageAssets.f1,
];

const BlogSection = () => (
  <Box sx={{ px: 2, py: 8, backgroundColor: "#fff", textAlign: "center" }}>
     <Typography
      sx={{
        fontSize: { xs: "5vw", sm: "3vw", md: 14 },
        fontWeight: 700,
        fontFamily: "Oswald",
        color:'#EF294C',
        mb: 1,
      }}
    >
News & Blog
    </Typography>
    {/* Header */}
    <Typography
      sx={{
        fontSize: { xs: "5vw", sm: "3vw", md: 36 },
        fontWeight: 700,
        fontFamily: "Oswald",
        mb: 4,
      }}
    >
      Explore News & Blog
    </Typography>

    {/* Blog Cards */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
        gap: 4,
        maxWidth: 1000,
        mx: "auto",
        mb: 8,
      }}
    >
      {blogCards.map((card, index) => (
        <Box
          key={index}
          sx={{
            boxShadow: 1,
            overflow: "hidden",
            backgroundColor:'#F4F4F4',
            textAlign: "left",
            height:'350px',
           
          }}
        >
          <Box
            component="img"
            src={card.img}
            alt={card.title}
            sx={{ width: "100%", height: '50%', objectFit: "cover" }}
          />
          <Box sx={{ p: 2 }}>
            <Typography sx={{ fontSize: 14, color: "#EF294C", fontWeight: "bold" }}>
              {card.tag}
               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
               <span style={{color:"#5C5C5B"}}> {card.date}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 600,
                mt: 1,
                fontFamily: "Oswald",
                lineHeight: 1.4,
              }}
            ><span  style={{color:"green"}}><hr/></span>
              {card.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>

    {/* Instagram Section */}
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
  </Box>
);

export default BlogSection;
