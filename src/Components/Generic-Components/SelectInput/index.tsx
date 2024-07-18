import { Select, MenuItem, Box, Typography } from "@mui/material";
import { inputBorder } from "../../Modular-Components/Auth/styles";

function CustomSelect({ margin = 'normal', fullWidth = true, id, name, size = 'medium', label, value, onChange }: any) {
    return (
        <Select
            fullWidth={fullWidth}
            margin={margin}
            value={value}
            onChange={onChange}
            inputProps={{
                style: inputBorder, // Apply your custom border style here
            }}
        >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    );
}

export default CustomSelect;
