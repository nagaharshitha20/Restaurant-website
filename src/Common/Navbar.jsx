import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Badge from '@mui/material/Badge';
import Dropdown from './Dropdown';
import ShopPage from '../pages/ShopPage';
import { ImageAssets } from '../ImageAssets';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/filterSlice';
const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


const pages = ['Home ', 'About', 'Shop', 'Blog', 'Pages', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
const handleOpenCart = () => {
    navigate('/cart');
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
  // Clear local storage
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isLoggedIn');

  // Clear Redux cart
  dispatch(clearCart());

  // Redirect user to login
  navigate('/login');
};

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
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

         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
  anchorEl={anchorElUser}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
 {settings.map((setting) => (
  <MenuItem
    key={setting}
    onClick={() => {
      handleCloseUserMenu();
      if (setting === 'Logout') {
        handleLogout();
      }
    }}
  >
    <Typography textAlign="center">{setting}</Typography>
  </MenuItem>
))}

</Menu>

          </Box>

    
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
            <Dropdown label="About Us" options={{label:"About",path:'/about'}} />
            <Dropdown label="Shop" opt1={{label: "Shop", path: "/shop"}}  />
            <Dropdown label="Blog" options={['News', 'Events', 'Offers']} />
            <Dropdown label="Pages" options={['Gallery', 'Testimonials', 'FAQ']} />
            <Dropdown label="Contact" options={['Support', 'Email', 'Location']} />
          </Box>

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
  <LocalMallIcon onClick={handleOpenCart}
    sx={{
      color: '#00A149',
      width: { xs: '22px', sm: '24px', md: '25px' },
      height: { xs: '30px', sm: '50px', md: '70px' },
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
            >
           Contact
            </Button>

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
 <MenuItem onClick={() => { 
  navigate('/login'); 
  handleCloseUserMenu(); 
}}>
  <Typography textAlign="center">Login</Typography>
</MenuItem>

        <MenuItem onClick={() => { navigate('/register'); handleCloseUserMenu(); }}>Register</MenuItem>
      </>
    ) : (
      <MenuItem onClick={() => {
        localStorage.removeItem('currentUser');
        localStorage.setItem('isLoggedIn', 'false');
        navigate('/');
        handleCloseUserMenu();
        window.location.reload(); // refresh to update UI
      }}>Logout</MenuItem>
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
