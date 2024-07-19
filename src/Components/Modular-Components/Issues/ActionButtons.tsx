import { Box } from '@mui/material'
import CustomButton from '../../Generic-Components/Button'
import { logoutButtonStyles, saveChangesButtonStyles } from './styles'


/**
 * ActionButtons component displays action buttons for 'Logout' and 'Save Changes'.
 */
const ActionButtons = ({handleSubmit}:any) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={2}>
      {/* Logout Button */}
      <CustomButton
        variant="outlined"
        sx={logoutButtonStyles}
        title='Logout'
        titleSize='14px'
        fontWeight="bold"
        onSubmit={() => {
          sessionStorage.clear();
          localStorage.clear();
          window.location.href = '/';
        }}
      />
      
      {/* Save Changes Button */}
      <CustomButton
        variant="contained"
        sx={saveChangesButtonStyles}
        title='Save Changes'
        titleSize='14px'
        fontWeight="bold"
        onSubmit={handleSubmit}
        type='submit'
      />
    </Box>
  );
}

export default ActionButtons