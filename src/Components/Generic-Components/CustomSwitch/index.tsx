import { alpha, styled } from "@mui/material/styles";
import { Switch } from '@mui/material';

const CustomSwitch = ({color, checked, onChange}:any) => {
  const StyledSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: color,
      "&:hover": {
        backgroundColor: alpha(`${color}`, theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: color,
    },
  }));
  return (
    <StyledSwitch checked={checked}  onChange={onChange}/>
  )
}

export default CustomSwitch