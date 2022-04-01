import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

export const StepContainer = styled(Box)(({ theme }) => ({
  background: 'transparent',
  padding: '0.1rem 1rem',
  cursor: 'move',
  display: 'flex',
  alignItems: 'center',
}));

export const StepDetails = styled(Paper)(() => ({
  flex: 1,
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  borderRadius: 6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const useStyles = makeStyles((theme) => ({
  selected: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));
