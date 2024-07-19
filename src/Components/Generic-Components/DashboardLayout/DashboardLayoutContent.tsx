import { experimentalStyled } from "@mui/material";

/**
 * A styled MUI div component that represents the content area of the dashboard layout.
 * It takes up all available space and allows overflow scrolling.
 */
const DashboardLayoutContent = experimentalStyled('div')({
  // Set the flex properties to take up all available space.
  flex: '1 1 auto',
  // Set the height to 100% of the parent element.
  height: '100%',
  // Enable auto scrolling for overflow content.
  overflow: 'auto',

  // Set the position to relative to enable positioning of child elements.
  position: 'relative',
  // Enable touch-based scrolling on Safari.
  WebkitOverflowScrolling: 'touch'
});

export default DashboardLayoutContent