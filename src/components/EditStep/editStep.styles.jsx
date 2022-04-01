import { styled } from '@mui/material';
import Button from '@mui/material/Button';

export const DeleteButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  '& :first-of-type': {
    marginRight: 10,
  },
}));
