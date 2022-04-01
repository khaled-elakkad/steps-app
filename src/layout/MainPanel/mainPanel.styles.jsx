import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { drawerWidth } from '../constants';

export const MainPanelContainer = styled(Box)(({ theme }) => ({
  padding: 16,
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));
