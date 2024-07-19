import { Box } from '@mui/material'
import CustomButton from '../../Generic-Components/Button'
import { logoutButtonStyles, saveChangesButtonStyles } from './styles'


/**
 * ActionButtons component displays action buttons for 'Logout' and 'Save Changes'.
 */
const ActionButtons = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={2}>
      {/* Logout Button */}
      <CustomButton
        variant="outlined"
        sx={logoutButtonStyles}
        title='Logout'
        titleSize='14px'
        fontWeight="bold"
      />
      
      {/* Save Changes Button */}
      <CustomButton
        variant="contained"
        sx={saveChangesButtonStyles}
        title='Save Changes'
        titleSize='14px'
        fontWeight="bold"
      />
    </Box>
  );
}

export default ActionButtons