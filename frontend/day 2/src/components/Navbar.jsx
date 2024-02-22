import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '../assets/css/Navbar.css';
import '../assets/css/Profile.css';
import { Link, useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const navigate = useNavigate();
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to = "/" id="header">AGRO FUNDX</Link>
          <div id="totalnav">
          <Link to = "/about" id="navbar">About</Link>
          <Link to = "/" id="navbar">Career</Link>
          <Link to = "/contact" id="navbar">Contact</Link>
          </div>
          <Button id="login2" onClick={()=>navigate("/farmerlogin")} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
