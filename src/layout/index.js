import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import SidePanel from './SidePanel';
import MainPanel from './MainPanel';
import AppBar from './AppBar';

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar handleDrawerToggle={handleDrawerToggle} />
      <SidePanel
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <MainPanel />
    </Box>
  );
};

export default Layout;
