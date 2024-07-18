import { Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { buttonStyles, buttonTextStyles } from './styles';

const BackToHomeButton = ({title}: any) => {
  return (
    <Button
    component={RouterLink}
    to="/"
    variant="outlined"
    sx={buttonStyles}
  >
    <Typography sx={buttonTextStyles}>{title}</Typography>
  </Button>
  )
}

export default BackToHomeButton