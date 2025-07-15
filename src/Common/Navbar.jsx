import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu,
  Container, Avatar, Button, Tooltip, MenuItem, Badge
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/filterSlice';
import { ImageAssets } from '../ImageAssets';
import Dropdown from './Dropdown';

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const cartItems = useSelector((state) => state.filters.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    dispatch(clearCart());
    navigate('/login');
  };

  const handleOpenCart = () => {
    navigate('/cart');
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop logo */}
          <Box
            component="img"
            src={ImageAssets.logo}
            alt="logo"
            sx={{
              width: { xs: 0, md: 119 },
              height: { xs: 0, md: 67 },
              display: { xs: 'none', md: 'flex' },
              ml: { md: 10, lg: 18 },
              mr: { md: -1, lg: -2.6 },
            }}
          />

          {/* Desktop text */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Fugaz One',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: '#EE3A43',
              textDecoration: 'none',
              fontSize: { md: '20px', lg: '22px' },
            }}
          >
            pizza hut
          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit" sx={{ color: 'black' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {/* Home dropdown */}
              <MenuItem disabled><Typography textAlign="center" sx={{ fontWeight: 'bold' }}>Home</Typography></MenuItem>
              {[
                { label: 'Home 2', path: '/home2' },
                { label: 'Home 3', path: '/home3' },
                { label: 'Home 4', path: '/home4' },
                { label: 'Home 5', path: '/home5' },
                { label: 'Home 6', path: '/home6' },
                { label: 'Home 7', path: '/home7' },
              ].map((item) => (
                <MenuItem key={item.label} onClick={() => { navigate(item.path); handleCloseNavMenu(); }}>
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}

              {/* About, Shop, Contact direct links */}
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Shop', path: '/shop' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <MenuItem key={item.label} onClick={() => { navigate(item.path); handleCloseNavMenu(); }}>
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}

              {/* Blog Dropdown */}
              <MenuItem disabled><Typography textAlign="center" sx={{ fontWeight: 'bold' }}>Blog</Typography></MenuItem>
              {['News', 'Events', 'Offers'].map((item) => (
                <MenuItem key={item} onClick={() => { navigate(`/${item.toLowerCase()}`); handleCloseNavMenu(); }}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}

              {/* Pages Dropdown */}
              <MenuItem disabled><Typography textAlign="center" sx={{ fontWeight: 'bold' }}>Pages</Typography></MenuItem>
              {['Gallery', 'Testimonials', 'FAQ'].map((item) => (
                <MenuItem key={item} onClick={() => { navigate(`/${item.toLowerCase()}`); handleCloseNavMenu(); }}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile logo */}
          <Box
            component="img"
            src={ImageAssets.logo}
            alt="logo"
            sx={{
              width: { xs: 80, sm: 100 },
              height: { xs: 50, sm: 60 },
              display: { xs: 'flex', md: 'none' },
              mr: 2,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Fugaz One',
              fontWeight: 400,
              fontSize: { xs: '20px', sm: '24px' },
              letterSpacing: '.3rem',
              color: '#EE3A43',
              textDecoration: 'none',
            }}
          >
            pizza hut
          </Typography>

          {/* Desktop Nav */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              ml: { md: 5, lg: 10 },
              gap: { md: '20px', lg: '30px' },
            }}
          >
            <Dropdown
              label="Home"
              opt1={{ label: "home2", path: "/home2" }}
              opt2={{ label: "home 3", path: "/home3" }}
              opt3={{ label: "home 4", path: "/home4" }}
              opt4={{ label: "home 5", path: "/home5" }}
              opt5={{ label: "home 6", path: "/home6" }}
              opt6={{ label: "home 7", path: "/home7" }}
            />
            <Button onClick={() => navigate('/about')} sx={{ color: 'black', textTransform: 'none' }}>About</Button>
            <Button onClick={() => navigate('/shop')} sx={{ color: 'black', textTransform: 'none' }}>Shop</Button>
            <Dropdown label="Blog" options={['News', 'Events', 'Offers']} />
            <Dropdown label="Pages" options={['Gallery', 'Testimonials', 'FAQ']} />
            <Button onClick={() => navigate('/contact')} sx={{ color: 'black', textTransform: 'none' }}>Contact</Button>
          </Box>

          {/* Right Icons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 2, md: 2.5 },
              mr: { xs: 1, sm: 4, md: 10, lg: 18 },
            }}
          >
            <Badge
              badgeContent={totalItems}
              color="success"
              sx={{ '& .MuiBadge-badge': { top: 22, right: 3 } }}
            >
              <LocalMallIcon
                onClick={handleOpenCart}
                sx={{
                  color: '#00A149',
                  width: { xs: '22px', sm: '24px', md: '25px' },
                  height: { xs: '30px', sm: '50px', md: '70px' },
                  cursor: 'pointer'
                }}
              />
            </Badge>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFC222',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: { xs: '14px', sm: '15px', md: '17px' },
                fontFamily: 'Oswald',
                borderRadius: '7px',
                padding: { xs: '6px 14px', sm: '7px 18px', md: '8px 20px' },
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#e6a700',
                  boxShadow: 'none',
                },
              }}
              onClick={() => navigate('/contact')}
            >
              Contact
            </Button>

            {/* User menu */}
            <Box>
              <IconButton onClick={handleOpenUserMenu}>
                <ClearAllIcon sx={{ color: 'black', fontSize: 28 }} />
              </IconButton>
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {!isLoggedIn ? (
                  <>
                    <MenuItem onClick={() => { navigate('/login'); handleCloseUserMenu(); }}>
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('/register'); handleCloseUserMenu(); }}>
                      <Typography textAlign="center">Register</Typography>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={() => {
                    localStorage.removeItem('currentUser');
                    localStorage.setItem('isLoggedIn', 'false');
                    navigate('/');
                    handleCloseUserMenu();
                    window.location.reload();
                  }}>
                    Logout
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
