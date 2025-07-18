import React from 'react';
import { Outlet,useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import MyMap from './Contact/MyMap';


const HomeLayout = () => {
  const location = useLocation();

  
  const hideComponentsOnPaths = ["/login", "/register",];

  const shouldHide = hideComponentsOnPaths.includes(location.pathname);
  return (
    <Box>
      {!shouldHide && <Navbar/>}
     
        {/* <MyMap/> */}
      <Outlet /> 
       {!shouldHide && <Footer/>}
    </Box>
  );
};

export default HomeLayout;