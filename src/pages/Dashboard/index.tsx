import { Container, Grid, Typography } from "@mui/material"

/**
 * Dashboard component renders the main dashboard layout.
 *
 * @returns {JSX.Element} The Dashboard component.
 */
const Dashboard = () => {
  return (
    <Container>
      {/* Main grid with padding */}
      <Grid position="relative" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {/* Grid item for main content */}
          <Grid item xs={12} md={8}>
            <Grid item sx={{ paddingLeft: 2 }}>
              {/* Typography component for dashboard heading */}
              <Typography>
                Dashboard
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard