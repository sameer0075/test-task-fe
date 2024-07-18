import { Container, Grid, Typography } from '@mui/material'

/**
 * Issues component is the root component for the issues page.
 * It renders a container with a grid layout that includes a heading.
 *
 * @return {JSX.Element} The Issues component.
 */
const Issues = () => {
  return (
    // Container with padding
    <Container>
      <Grid position="relative" sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {/* Grid item for the heading */}
          <Grid item xs={12} md={8}>
            <Grid item sx={{ paddingLeft: 2 }}>
              {/* Typography component for the heading */}
              <Typography>
                {/* Heading text */}
                Issues
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Container>
  )
}

export default Issues