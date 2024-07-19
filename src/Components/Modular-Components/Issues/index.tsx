import { Container, Grid } from '@mui/material'
import ActionButtons from './ActionButtons'
import IssuesForm from './Form'
import CustomTable from '../../Generic-Components/Table'

/**
 * Issues component is the main component for the Issues page.
 * It contains the action buttons and the form and table components.
 *
 * @returns {JSX.Element} The Issues component.
 */
const Issues = () => {
  return (
    // Container for the Issues page
    <Container maxWidth="xl">
      {/* Action buttons */}
      <Grid item xs={12} md={4} sx={{ pt: 4, pb: 3 }}>
        <ActionButtons />
      </Grid>
      {/* Main content */}
      <Grid position="relative" sx={{ backgroundColor: "white", height: '80vh', borderRadius: '16px', py: 2 }}>
        {/* Grid container for the layout */}
        <Grid container spacing={2}>
          {/* Form component */}
          <Grid item xs={12}>
            <Grid item sx={{ px: 5 }}>
              <IssuesForm />
            </Grid>
          </Grid>
          {/* Table component */}
          <Grid item xs={12}>
            <Grid item sx={{ px: 5 }}>
              <CustomTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Issues