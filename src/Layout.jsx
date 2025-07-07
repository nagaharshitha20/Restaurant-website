import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";


const HomeLayout = () => {
  return (
    <Box>
        <Navbar />
      <Outlet /> 
      <Footer />
    </Box>
  );
};

export default HomeLayout;