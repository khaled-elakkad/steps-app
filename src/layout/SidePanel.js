import { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AllSteps from '../components/AllSteps';
import { StepContext } from '../providers/StepProvider';
import { SET_MODE } from '../providers/StepProvider/action-types';
import { drawerWidth, mainPanelModes } from './constants';
import ActionButton from '../components/custom/ActionButton';

const Content = ({ handleDrawerToggle }) => {
  const { dispatch } = useContext(StepContext);
  return (
    <div>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <ActionButton
          variant="outlined"
          onClick={() =>
            dispatch({
              type: SET_MODE,
              payload: { mode: mainPanelModes.addMode },
            })
          }
        >
          ADD A STEP
        </ActionButton>
        <ActionButton
          variant="contained"
          onClick={() =>
            dispatch({
              type: SET_MODE,
              payload: { mode: mainPanelModes.jsonMode },
            })
          }
        >
          DEBUG
        </ActionButton>
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
        <Content handleDrawerToggle={handleDrawerToggle} />
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
