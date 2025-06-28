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


// ✅ Correct image import
import logo from './logo.png';

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
            src={logo}
            sx={{
              width: 119,
              height: 67,
              display: { xs: 'none', md: 'flex' },
              top: 15,
              left: 312,
              mr:-2.6,
            }}
          />

          {/* Typography for desktop */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Fugaz One',
              fontWeight: 400,
              letterSpacing: '.3rem',
              width: '111px',
              height: '27px',
              top: '34px',
              left: '415px',
              color: '#EE3A43',
              textDecoration: 'none',
            }}
          >
            pizza hut
          </Typography>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Box
            component="img"
            src={logo}
            sx={{
              width: 119,
              height: 67,
              display: { xs: 'flex', md: 'none' },
              mr: 2,
            }}
          />

          {/* Typography for mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Fugaz One',
              fontWeight: 400,
              fontSize: 24,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            pizza hut
          </Typography>

          {/* Menu items for desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, width: '521.66px', height: '57px',marginLeft: '100px',gap:'30px' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', color: 'black', fontFamily: 'Franklin Gothic Medium' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Badge badgeContent={0} color="success" sx={{ mr: 2 }}>
  <LocalMallIcon sx={{ color: '#00A149', width: '25px', height: '70px' }} />
</Badge>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFC222',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '17px',
              fontFamily: 'Oswald',
              borderRadius: '7px',
              padding: '8px 20px',
              textTransform: 'none',
              boxShadow: 'none',
              marginRight: '10px',
              '&:hover': {
                backgroundColor: '#e6a700',
                boxShadow: 'none',
              },
            }}
          >
            Contact
          </Button>

          {/* User avatar and settings */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          < ClearAllIcon style={{color:'black',marginLeft:'10px'}}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;