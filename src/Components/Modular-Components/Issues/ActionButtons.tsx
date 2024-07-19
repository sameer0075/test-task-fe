import { Box } from '@mui/material'
import React from 'react'
import CustomButton from '../../Generic-Components/Button'

const ActionButtons = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-end" gap={2}>
      <CustomButton
        variant="outlined"
        sx={{
          borderRadius: 10,
          height: 40,
          width: '100px',
          border: '1px solid #E9513E',
          color: '#E9513E',
          '&:hover': {
            backgroundColor: '#E7463F33',
            border: '1px solid #E9513E',
          },
          textTransform: 'none',

        }}
        title='Logout'
        titleSize='14px'
        fontWeight="bold"
      />
      <CustomButton
        variant="contained"
        sx={{
          borderRadius: 10,
          height: 40,
          minWidth: '100px',
          color: 'white',
          background: 'linear-gradient(180deg, #E7463F, #EF8439)',
          textTransform: 'none',
        }}
        title='Save Changes'
        titleSize='14px'
        fontWeight="bold"
      />
    </Box>)
}

export default ActionButtons