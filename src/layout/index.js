import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

import SidePanel from './SidePanel';
import MainPanel from './MainPanel';
import { drawerWidth } from './constants';

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        color="inherit"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SidePanel
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <MainPanel drawerWidth={drawerWidth} />
    </Box>
  );
};

export default Layout;
