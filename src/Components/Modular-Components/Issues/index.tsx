import {Container, Grid, Typography } from '@mui/material'
import ActionButtons from './ActionButtons'
import IssuesForm from './Form'
import CustomTable from '../../Generic-Components/Table'

const Issues = () => {
  return (
    <Container maxWidth="xl">
      <Grid item xs={12} md={4} sx={{ pt:4, pb:3 }}>
        <ActionButtons />
      </Grid>
      <Grid position="relative" sx={{ backgroundColor: "white", height: '80vh', borderRadius: '16px', py: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid item sx={{ px: 5 }}>
              <IssuesForm />
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12}>
            <Grid item sx={{ px: 5 }}>
             <CustomTable/>
            </Grid>
          </Grid>
      </Grid>
    </Container>
  )
}

export default Issues