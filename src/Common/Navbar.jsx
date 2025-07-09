import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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
import { ImageAssets } from '../ImageAssets';

const pages = ['Home ', 'About', 'Shop', 'Blog', 'Pages', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
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

          {/* Typography for desktop */}
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

          {/* Mobile menu button */}
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
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
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

          {/* Typography for mobile */}
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

          {/* Menu items for desktop */}
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
            <Dropdown label="About Us" options={['Mission', 'Vision', 'Team']} />
            <Dropdown label="Shop" options={['Pizza', 'Burgers', 'Desserts']} />
            <Dropdown label="Blog" options={['News', 'Events', 'Offers']} />
            <Dropdown label="Pages" options={['Gallery', 'Testimonials', 'FAQ']} />
            <Dropdown label="Contact" options={['Support', 'Email', 'Location']} />
          </Box>

          {/* Right-side icons/buttons */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 2, md: 2.5 },
              mr: { xs: 1, sm: 4, md: 10, lg: 18 },
            }}
          >
            <Badge
              badgeContent={0}
              color="success"
              sx={{ '& .MuiBadge-badge': { top: 6, right: 6 } }}
            >
              <LocalMallIcon
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

            <ClearAllIcon sx={{ color: 'black', fontSize: {  md: 28 },display:{ xs: 'none',sm:'none', md: 'flex' } }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
