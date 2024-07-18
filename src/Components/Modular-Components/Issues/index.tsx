import { Box, Grid, Typography } from "@mui/material";
import Switch from '@mui/material/Switch';

import CustomTextInput from "../../Generic-Components/TextInput";
import { inputBorder } from "../Auth/styles";

function IssuesLayout() {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <Box sx={{ backgroundColor: 'white', padding: 2, marginTop:5 }}>
            <Box>
                <Typography sx={{ color: '#E9513E', marginBottom: 2 }}>Create an Issue</Typography>

                <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={2.5}>
                        <CustomTextInput
                            margin="normal"
                            fullWidth={false}
                            id="title1"
                            name="title1"
                            size='small'
                            label='Title 1'
                            InputProps={{
                                style: inputBorder,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.5}>
                        <CustomTextInput
                            margin="normal"
                            fullWidth={false}
                            id="title2"
                            name="title2"
                            size='small'
                            label='Title 2'
                            InputProps={{
                                style: inputBorder
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.5}>
                        <CustomTextInput
                            margin="normal"
                            fullWidth={false}
                            id="title3"
                            name="title3"
                            size='small'
                            label='Title 3'
                            InputProps={{
                                style: inputBorder
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.5}>
                        <CustomTextInput
                            margin="normal"
                            fullWidth={false}
                            id="title4"
                            name="title4"
                            size='small'
                            label='Title 4'
                            InputProps={{
                                style: inputBorder
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} sx={{display: 'flex', alignItems: 'center'}}>
                        <Switch
                            id="toggle-switch"
                            name="toggle-switch"
                            color="primary"
                            size="small"
                        />
                        <Typography sx={{fontSize: '8px'}}>Electrical</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
            </Box>
        </Box>
    );
}

export default IssuesLayout;
