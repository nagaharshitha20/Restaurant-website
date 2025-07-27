import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu,
  Container, Badge, MenuItem, Drawer, List, ListItemButton,
  ListItemText, Collapse, InputBase, Paper, Divider, ListItem
} from '@mui/material';
import { setSearchQuery } from '../redux/filterSlice';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { clearCart } from '../redux/filterSlice';
import { ImageAssets } from '../ImageAssets';
import Dropdown from './Dropdown';
import { auth } from '../Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { db } from '../Firebase'; // Ensure your Firebase setup exports `db`
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { setCart } from '../redux/filterSlice'; // import the setCart action


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const cartItems = useSelector((state) => state.filters.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openMenus, setOpenMenus] = React.useState({ Home: false, Blog: false, Pages: false });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [searchQuery, setSearchQueryInput] = React.useState('');
  const location = useLocation();

React.useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      setIsLoggedIn(true);
      try {
        const cartRef = doc(db, 'carts', user.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          const data = cartSnap.data();
          if (Array.isArray(data.cart)) {
            dispatch(setCart(data.cart));
          }
        }
      } catch (error) {
        console.error('Error loading cart from Firestore:', error);
      }
    } else {
      setIsLoggedIn(false);
      dispatch(clearCart());
    }
  });

  return () => unsubscribe();
}, [dispatch]);

React.useEffect(() => {
  const saveCartToFirestore = async () => {
    const user = auth.currentUser;
    if (user && cartItems.length > 0) {
      try {
        const cartRef = doc(db, 'carts', user.uid);
        await setDoc(cartRef, { cart: cartItems });
      } catch (error) {
        console.error('Error saving cart to Firestore:', error);
      }
    }
  };

  saveCartToFirestore();
}, [cartItems]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      dispatch(setSearchQuery(trimmed));
      navigate(`/shop?search=${encodeURIComponent(trimmed)}`);
    }
  };

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

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(clearCart());
    handleCloseUserMenu();
    navigate('/login');
  };

  const handleOpenCart = () => {
    navigate('/cart');
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ backgroundColor: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: 'black' }} />
            </IconButton>

            <Paper
              component="form"
              onSubmit={handleSearchSubmit}
              sx={{
                p: '2px 8px',
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                mx: 1,
                borderRadius: '12px',
                backgroundColor: '#f5f5f5',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={(e) => setSearchQueryInput(e.target.value)}
              />
            </Paper>

            <Badge badgeContent={totalItems} color="success" sx={{ '& .MuiBadge-badge': { top: 8, right: 3 } }}>
              <LocalMallIcon onClick={handleOpenCart} sx={{ color: '#00A149', fontSize: 26, cursor: 'pointer' }} />
            </Badge>

            <IconButton onClick={handleOpenUserMenu}>
              <AccountCircleIcon sx={{ color: 'rgba(205, 201, 201, 1)', fontSize: 30 }} />
            </IconButton>
          </Box>

          <Box component="img" src={ImageAssets.brand} alt="logo"
            sx={{
              width: { xs: 0, md: 149 },
              height: { xs: 0, md: 67 },
              display: { xs: 'none', md: 'flex' },
              ml: { md: 10, lg: 18 },
              mr: { md: -1, lg: -2.6 },
            }}
          />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Fugaz One',
              fontWeight: 400,
              letterSpacing: '.1rem',
              color: '#EE3A43',
              textDecoration: 'none',
              fontSize: { md: '20px', lg: '22px' },
            }}
          >
            HeavenLyte
          </Typography> */}
<Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)} sx={{ display: { xs: 'block', md: 'none' } }}>
  <Box sx={{ width: 250, p: 2 }}>
    <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Fredoka One' }}>Menu</Typography>
    <Divider sx={{ mb: 1 }} />

    {/* Regular links (in same order as desktop) */}
    {[
      { label: 'Home', path: '/home' },
      { label: 'About', path: '/about' },
      { label: 'Shop', path: '/shop' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' }
    ].map((item) => (
      <ListItem button key={item.label} onClick={() => { navigate(item.path); setDrawerOpen(false); }}>
        <ListItemText primary={item.label} />
      </ListItem>
    ))}

    {/* Pages dropdown for mobile */}
    <ListItem button onClick={() => setOpenMenus({ ...openMenus, Pages: !openMenus.Pages })}>
      <ListItemText primary="Pages" />
      {openMenus.Pages ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={openMenus.Pages} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {[
          { label: 'Menu', path: '/myshop' },
          { label: 'Deals', path: '/mypages' },
          // { label: 'Gallery', path: '/gallery' },
          // { label: 'Testimonials', path: '/testimonials' },
          // { label: 'FAQ', path: '/faq' }
        ].map((item) => (
          <ListItemButton key={item.label} sx={{ pl: 4 }} onClick={() => { navigate(item.path); setDrawerOpen(false); }}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  </Box>
</Drawer>


          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            ml: { md: 5, lg: 10 },
            gap: { md: '20px', lg: '40px' },
          }}>
            {/* <Dropdown
              label="Home"
              opt1={{ label: "Home 2", path: "/home2" }}
              opt2={{ label: "Home 3", path: "/home3" }}
              opt3={{ label: "Home 4", path: "/home4" }}
              opt4={{ label: "Home 5", path: "/home5" }}
              opt5={{ label: "Home 6", path: "/home6" }}
              opt6={{ label: "Home 7", path: "/home7" }}
            /> */}
             <Link to="/home" style={{
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Franklin Gothic Medium',
    transition: 'color 0.3s',
  }}
  onMouseEnter={(e) => (e.target.style.color = '#EF1B48')}
  onMouseLeave={(e) => (e.target.style.color = 'black')}>Home</Link>
            <Link to="/about" style={{
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Franklin Gothic Medium',
    transition: 'color 0.3s',
  }}
  onMouseEnter={(e) => (e.target.style.color = '#EF1B48')}
  onMouseLeave={(e) => (e.target.style.color = 'black')}>About</Link>
            <Link to="/shop"style={{
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Franklin Gothic Medium',
    transition: 'color 0.3s',
  }}
  onMouseEnter={(e) => (e.target.style.color = '#EF1B48')}
  onMouseLeave={(e) => (e.target.style.color = 'black')}>Shop</Link>
            <Link to="/blog" style={{
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Franklin Gothic Medium',
    transition: 'color 0.3s',
  }}
  onMouseEnter={(e) => (e.target.style.color = '#EF1B48')}
  onMouseLeave={(e) => (e.target.style.color = 'black')}>Blog</Link>
            {/* <Dropdown label="Blog" options={['News', 'Events', 'Offers']} /> */}
            <Dropdown label="Pages" opt1={{ label: "Menu", path: "/myshop" }}
            opt2={{ label: "Deals", path: "/mypages" }} />
            <Link to="/contact" style={{
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    fontFamily: 'Franklin Gothic Medium',
    transition: 'color 0.3s',
  }}
  onMouseEnter={(e) => (e.target.style.color = '#EF1B48')}
  onMouseLeave={(e) => (e.target.style.color = 'black')}>Contact</Link>
          </Box>

          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            mr: { xs: 1, sm: 4, md: 10, lg: 18 },
          }}>
            <Badge badgeContent={totalItems} color="success" sx={{ '& .MuiBadge-badge': { top: 22, right: 3 } }}>
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

            <Link to="/contact" style={{
              backgroundColor: '#FFC222',
              color: '#fff',
              fontWeight: 600,
              fontSize: '16px',
              padding: '8px 18px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontFamily: 'Oswald',
            }}>
              Contact
            </Link>

            <Box>
              <IconButton onClick={handleOpenUserMenu}>
                <ClearAllIcon sx={{ color: 'black', fontSize: 28 }} />
              </IconButton>
              <Menu anchorEl={anchorElUser} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                {!isLoggedIn ? (
                  <>
                    <MenuItem onClick={() => { navigate('/login'); handleCloseUserMenu(); }}>
                      <Typography>Login</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('/register'); handleCloseUserMenu(); }}>
                      <Typography>Signup</Typography>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={handleLogout}>
                    <Typography>Logout</Typography>
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
