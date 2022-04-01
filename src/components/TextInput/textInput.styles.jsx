import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const TextInputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: 8,
  padding: '20px',
  marginBottom: '20px',
  marginRight: '20px',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '250px',
  marginLeft: '20px',
}));
