import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import PizzaIcon from "@mui/icons-material/LocalPizza"; // Optional for theme

const Loader = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress
        size={80}
        thickness={5}
        sx={{
          color: "#d32f2f", // Pizza Hut red
        }}
      />
      <Box  display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
  ><PizzaIcon sx={{ fontSize: 30, color: "#fbc02d", mt: 2 }} /> {/* Pizza emoji/icon */}
      <Typography
        variant="h5"
        sx={{
          mt: 2,
          color: "#d32f2f",
          fontSize:{xs:20,md:22},
          fontFamily: "'Comic Sans MS', cursive",
        }}
      >
       Opening the doors to flavor...
      </Typography></Box>
      
    </Box>
  );
};

export default Loader;
