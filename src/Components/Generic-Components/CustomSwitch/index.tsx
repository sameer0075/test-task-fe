import { alpha, styled } from "@mui/material/styles";
import { Switch } from '@mui/material';

/**
 * Custom Switch component.
 *
 * This component is a styled Switch component from Material-UI.
 * It is styled based on the color prop passed to it.
 *
 * @param {string} color - The color of the switch.
 * @returns {JSX.Element} - The CustomSwitch component.
 */
const CustomSwitch = ({color}:any) => {
  /**
   * StyledSwitch component.
   *
   * This component is a styled Switch component from Material-UI.
   * It is styled based on the color prop passed to it.
   */
  const StyledSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "red", // Set the color of the switch indicator.
      "&:hover": {
        backgroundColor: alpha("#011f3b", theme.palette.action.hoverOpacity), // Set the background color of the switch indicator on hover.
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "pink", // Set the background color of the switch track.
    },
  }));
  return (
    <StyledSwitch/>
  )
}

export default CustomSwitch