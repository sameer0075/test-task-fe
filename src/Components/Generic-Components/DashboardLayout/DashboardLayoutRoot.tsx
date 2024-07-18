import { experimentalStyled } from '@mui/material';

// A styled div component that serves as the root of the dashboard layout.
// It sets the background color, display, height, overflow, and width of the component.
const DashboardLayoutRoot = experimentalStyled('div')(
  ({ theme }) => (
    {
      // Set the background color to the default background color from the theme.
      backgroundColor: theme.palette.background.default,
      // Set the display property to 'flex' to enable flexbox layout.
      display: 'flex',
      // Set the height property to '100%' to take up all available vertical space.
      height: '100%',
      // Set the overflow property to 'hidden' to prevent content from overflowing.
      overflow: 'hidden',
      // Set the width property to '100%' to take up all available horizontal space.
      width: '100%'
    }
  )
);

export default DashboardLayoutRoot