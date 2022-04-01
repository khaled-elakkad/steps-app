import { styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { drawerWidth } from '../constants';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));
