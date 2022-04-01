// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BurgerButton from '../../components/BurgerButton';
import { StyledAppBar } from './appBar.styles';

const AppBar = ({ handleDrawerToggle }) => {
  return (
    <StyledAppBar elevation={0} color="inherit">
      <Toolbar>
        <BurgerButton handleDrawerToggle={handleDrawerToggle} />
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
