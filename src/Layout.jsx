import React from 'react';
import { Outlet,useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
import CartSync from './pages/CartSync';
import ScrollToTop from './ScrollToTop';
import MultiImageUpload from './MultiImageUpload';


const HomeLayout = () => {
  const location = useLocation();

  
  const hideComponentsOnPaths = ["/login", "/register",];

  const shouldHide = hideComponentsOnPaths.includes(location.pathname);
  return (
    
    <Box>
    
      <ScrollToTop/>
      <CartSync/>  
          {!shouldHide && <Navbar/>}
     
       
      <Outlet /> 
       
       {!shouldHide && <Footer/>}
    </Box>
  );
};

export default HomeLayout;