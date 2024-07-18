import { Switch, alpha } from "@mui/material";
import { styled} from "@mui/material/styles";

/**
 * Styled Switch component for the theme switch.
 * 
 * This component is styled based on the selected theme mode.
 */
const ThemeSwitch = styled(Switch)(({ theme }) => ({
  // Styles for the checked switch
  "& .MuiSwitch-switchBase.Mui-checked": {
    // Set the color of the switch indicator to green in dark mode, yellow in light mode
    color: theme.palette.mode === 'dark' ? "#76d14d" : "#f7c500",
    // Styles for the hover state of the switch
    "&:hover": {
      // Set the background color of the switch indicator to semi-transparent green/yellow on hover
      backgroundColor: alpha(theme.palette.mode === 'dark' ? "#76d14d" : "#f7c500", theme.palette.action.hoverOpacity),
    },
  },
  // Styles for the track of the switch when it is checked
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    // Set the background color of the track to green in dark mode, yellow in light mode
    backgroundColor: theme.palette.mode === 'dark' ? "#76d14d" : "#f7c500",
  },
}));

export default ThemeSwitch
