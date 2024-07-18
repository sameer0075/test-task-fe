import { inputStyle } from "../../Modular-Components/Auth/styles"
import { TextInputInterface } from "./interface"
import { CustomTextField } from "../../Modular-Components/Auth/styled-components"

/**
 * CustomTextInput component for rendering a custom text input field.
 * 
 * @param margin - The margin style for the input field.
 * @param fullWidth - Whether the input should take up the full width.
 * @param id - The id of the input field.
 * @param name - The name of the input field.
 * @param size - The size of the input field.
 * @param label - The label for the input field.
 * @param InputProps - Additional input properties.
 * @param type - The type of the input field.
 * @param extraProps - Extra properties for the input field.
 * @returns JSX.Element
 */
const CustomTextInput = ({ margin = 'normal', fullWidth, id, name, size = 'medium', label, InputProps, type, extraProps,sx }: TextInputInterface) => {
    // Determine the input type based on whether it is a password field and showPassword flag
    const inputType = type === 'password' ? extraProps.showPassword ? 'text' : 'password' : type;
    console.log("input type", inputType, extraProps);
    
    return (
        <CustomTextField
            margin={margin}
            sx={sx ? {...inputStyle, sx} : {...inputStyle}}
            fullWidth={fullWidth}
            id={id}
            name={name}
            size={size}
            label={label}
            InputProps={InputProps}
            type={inputType}
        />
    );
}

export default CustomTextInput