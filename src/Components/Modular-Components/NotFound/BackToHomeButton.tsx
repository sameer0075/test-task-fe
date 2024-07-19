import { Button, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { buttonStyles, buttonTextStyles } from './styles';
import CustomButton from '../../Generic-Components/Button';

const BackToHomeButton = ({title}: any) => {
  return (
    <CustomButton
    component={RouterLink}
    to="/"
    variant="outlined"
    sx={buttonStyles}
    title={title}
    fontWeight={'bold'}
  />

  )
}

export default BackToHomeButton