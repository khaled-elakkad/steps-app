import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material';
import { drawerWidth } from '../constants';

export const SidePanelContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: drawerWidth,
    background: theme.palette.primary.light,
  },
}));

export const GenericDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.only('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: drawerWidth,
    background: theme.palette.primary.light,
  },
}));
