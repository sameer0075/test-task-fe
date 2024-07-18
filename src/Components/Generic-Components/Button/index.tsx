import { Button, Typography } from "@mui/material"
import { ButtonInterface } from "./interface"
import { buttonStyle } from "./style"

const CustomButton = ({ title,sx,fullWidth,variant }: ButtonInterface) => {
    return <Button
        fullWidth={fullWidth}
        variant={variant}
        sx={sx ? sx : buttonStyle}
    >
        <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
    </Button>
}

export default CustomButton