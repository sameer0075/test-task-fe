import AppBar from "./styled-components/AppBar";

/**
 * The Header component represents the top bar of the application.
 *
 * It is a fixed position AppBar component from Material-UI.
 *
 * @returns The rendered Header component.
 */
const Header = () => {
  // Render the AppBar component with the position set to "fixed".
  return (
    <AppBar
      // Set the position of the AppBar to "fixed" to make it stay at the top of the viewport.
      position="fixed"
    />
  )
}

export default Header
