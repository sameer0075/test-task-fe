import { experimentalStyled } from '@mui/material';

/**
 * This is the container for the content of the dashboard layout.
 *
 * The container is a flexbox that takes up all remaining space in the layout
 * and prevents its content from overflowing.
 *
 * It uses the experimentalStyled function from MUI to create a styled div
 * component.
 */
const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

export default DashboardLayoutContainer