import Typography from '@mui/material/Typography';
import { TextInputContainer, StyledTextField } from './textInput.styles';

const TextInput = ({ label, name, handleChange }) => {
  return (
    <TextInputContainer>
      <Typography variant="subtitle2" fontWeight={600}>
        {label}
      </Typography>
      <StyledTextField
        hiddenLabel
        id="step-name"
        variant="filled"
        size="small"
        value={name}
        InputProps={{ disableUnderline: true }}
        onChange={handleChange}
      />
    </TextInputContainer>
  );
};

export default TextInput;
