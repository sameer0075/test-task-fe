import { Typography } from '@mui/material'
import React from 'react'

const CustomText = ({sx, content, variant}: any) => {
  return (
    <Typography
      sx={sx}
      variant={variant}
    >
      {content}
    </Typography>
  )
}

export default CustomText