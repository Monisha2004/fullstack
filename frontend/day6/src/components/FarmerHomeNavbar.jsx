import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import '../assets/css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

import SideNav from './SideNav';

export default function HomeAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <SideNav />
            <Link to="/" id="header">
              AGRO FUNDX
            </Link>
            <div id="totalnav">
              <Link to="/about" id="navbar">
                About
              </Link>
              <div style={{ width: '20px' }} /> {/* Adjust the width as needed for the desired gap */}
              <Link to="/career" id="navbar">
                Career
              </Link>
              <div style={{ width: '20px' }} /> {/* Adjust the width as needed for the desired gap */}
              <Link to="/contact" id="navbar">
                Contact
              </Link>
            </div>
            <IconButton id="login1" onClick={handleClick} color="inherit"
            style={{ boxShadow: 'none', borderRadius: '50%' }}>
              <Avatar alt="User Avatar" src="/path-to-your-avatar-image.jpg" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigate("/chart")}>Profile</MenuItem>
              <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}