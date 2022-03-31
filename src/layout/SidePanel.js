import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AllSteps from '../components/AllSteps';
import { StepContext } from '../providers/StepProvider';
import { CLEAR_SELECTED_STEP } from '../providers/StepProvider/action-types';
import { drawerWidth } from './constants';

const Content = () => {
  const { dispatch } = useContext(StepContext);
  return (
    <div>
      <Toolbar>
        <Button
          variant="outlined"
          onClick={() => dispatch({ type: CLEAR_SELECTED_STEP })}
        >
          ADD A STEP
        </Button>
        <Button variant="contained">DEBUG</Button>
      </Toolbar>
      <AllSteps />
    </div>
  );
};

const SidePanel = ({ mobileOpen, handleDrawerToggle }) => {
  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="steps list"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <Content />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        <Content />
      </Drawer>
    </Box>
  );
};

export default SidePanel;
