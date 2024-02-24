import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import '../assets/css/Navbar.css';

import { Link} from 'react-router-dom';

export default function ButtonAppBar() {
    
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to = "/" id="header">AGRO FUNDX</Link>
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
            </Toolbar>
            </AppBar>
            </Box>
            );
          }
          // <Button id="login2" onClick={()=>navigate("/farmerlogin")} color="inherit">Login</Button>
