import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  mr: 2,
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
