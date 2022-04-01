import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}));

export const LeftSide = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
}));

export const RightSide = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  '& :first-of-type': {
    marginBottom: 10,
  },
}));
