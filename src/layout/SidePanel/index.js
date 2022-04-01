import AllSteps from '../../components/AllSteps';
import StepsToolbar from '../../components/StepsToolbar';
import {
  SidePanelContainer,
  MobileDrawer,
  GenericDrawer,
} from './sidePanel.styles';

const SidePanel = ({ mobileOpen, handleDrawerToggle }) => {
  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <SidePanelContainer component="nav" aria-label="steps list">
      <MobileDrawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StepsToolbar handleDrawerToggle={handleDrawerToggle} />
        <AllSteps />
      </MobileDrawer>
      <GenericDrawer variant="permanent" open>
        <StepsToolbar handleDrawerToggle={handleDrawerToggle} />
        <AllSteps />
      </GenericDrawer>
    </SidePanelContainer>
  );
};

export default SidePanel;
