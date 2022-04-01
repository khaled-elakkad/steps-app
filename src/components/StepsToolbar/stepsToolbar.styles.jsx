import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

export const ButtonsContainer = styled(Box)(() => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  '& :first-of-type': {
    marginRight: 5,
  },
}));

export const StyledIconButton = styled(IconButton)(() => ({
  mr: 2,
  display: { sm: 'none' },
}));
