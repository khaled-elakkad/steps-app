import MenuIcon from '@mui/icons-material/Menu';

import { StyledIconButton } from './burgerButton.styles';

const BurgerButton = ({ handleDrawerToggle }) => {
  return (
    <StyledIconButton
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
    </StyledIconButton>
  );
};

export default BurgerButton;
