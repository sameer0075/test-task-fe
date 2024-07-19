import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { inputBorder } from "../../Modular-Components/Auth/styles";
import { CustomSelectInterface } from "./interface";

/**
 * CustomSelect component is a wrapper around MUI's Select component
 * that applies a custom border style to the input element.
 *
 * @param {object} props - The props object containing the following properties:
 *   - margin: The margin of the Select component. Defaults to 'normal'.
 *   - fullWidth: Whether the Select component should take up all available space. Defaults to true.
 *   - id: The id of the Select component.
 *   - name: The name of the Select component.
 *   - size: The size of the Select component. Defaults to 'medium'.
 *   - label: The label of the Select component.
 *   - value: The selected value of the Select component.
 *   - onChange: The callback function to be called when the selected value changes.
 * @returns {JSX.Element} The rendered Select component.
 */
function CustomSelect({ inputLabel, sx, options }: CustomSelectInterface) {
    console.log("options", options)
    return (
        <FormControl
        margin="normal"
        fullWidth
        size="small"

    >
        <InputLabel id="demo-simple-select-label">
            {inputLabel}
        </InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={inputLabel}
            sx={{
                ...sx,
            }}
        >
            {options?.map(option => (
                <MenuItem value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    </FormControl>

    );
}

export default CustomSelect;
