import { Typography } from '@mui/material'

/**
 * A component that displays a not found message in a white, centered typography component.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.text - The text to display.
 * @return {JSX.Element} The not found text component.
 */
const NotFoundText = ({text}: {text: string}) => {
  return (
    <Typography
    // Center the text
    align="center"
    // Set the text color to white
    color="white"
    // Set the typography variant to h2
    variant={'h2'}
  >
    {/* Display the provided text */}
    {text}
  </Typography>
  )
}

export default NotFoundText