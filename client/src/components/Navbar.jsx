


import AdbIcon from '@mui/icons-material/Adb';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Dentists', path: '/dentistspage' },
  { name: 'Service', path: '/servicespage' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/Login' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: scrolled ? '#0d47a1' : '#1976d2',
    transition: 'background-color 0.3s ease-in-out',
  };

  return (

<AppBar position="fixed" className="navbar">
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <LocalHospitalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: '1%' }} />
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        className="navbar-title"
        sx={{ display: { xs: 'none', md: 'flex' } }}
      >
        DentCare
      </Typography>

      {}
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="menu"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={handleCloseNavMenu}>
              <Typography
                textAlign="center"
                component={Link}
                to={page.path}
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                {page.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Mobile View - Title */}
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: '1%' }} />
      <Typography
        variant="h5"
        noWrap
        component={Link}
        to="/"
        className="navbar-title"
        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
      >
        Hospital
      </Typography>

      {/* Desktop View - Navigation Links */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }} className="navbar-menu">
        {pages.map((page) => (
          <Button
            key={page.name}
            component={Link}
            to={page.path}
            onClick={handleCloseNavMenu}
            className="nav-link"
          >
            {page.name}
          </Button>
        ))}
      </Box>

      {/* User Menu */}
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings" className="navbar-tooltip">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="User Avatar" src="src/assets/doc6.jpeg" className="navbar-avatar" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '4%' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>
  </Container>
</AppBar>

  );
}

export default Navbar;
