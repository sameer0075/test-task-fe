import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

/**
 * A styled MUI AppBar component that handles the open prop.
 * The styled component is used to customize the appearance of the AppBar.
 * The shouldForwardProp function is used to exclude the 'open' prop from being forwarded.
 *
 * @param {AppBarProps} props - The props for the AppBar component.
 * @param {Theme} theme - The MUI theme object.
 * @param {boolean} open - The state of the drawer.
 * @returns {CSSObject} The CSS object for the styled AppBar component.
 */
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  // Set the height of the AppBar to 66px.
  height: "66px",

  // Set the border colors and styles.
  borderBottom: "1px solid rgb(0, 0, 0, 20%)",
  borderTop: "none",
  borderLeft: "1px solid rgb(255, 255, 255, 5%)",
  borderRight: "none",

  // Set the background color and width of the AppBar.
  boxShadow: "none",
  backgroundColor: "white",
  width: `calc(100% - 63px)`,

  // Apply a transition effect for the width and margin properties.
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  // Apply different styles when the drawer is open.
  ...(open && {
    marginLeft: drawerWidth, // Set the left margin to the drawer width.
    width: `calc(100% - ${drawerWidth}px)`, // Set the width to the calculated width minus the drawer width.
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  return (
    <AppBar position="fixed" />
  )
}

export default Header
