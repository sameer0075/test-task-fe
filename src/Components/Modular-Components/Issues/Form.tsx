import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Switch from '@mui/material/Switch';

import CustomTextInput from "../../Generic-Components/TextInput";
import { inputBorder } from "../Auth/styles";
import CustomSwitch from "../../Generic-Components/CustomSwitch";
import CustomButton from "../../Generic-Components/Button";

function IssuesForm() {
    const priorityOptions = ['Low', 'Medium', 'High'];
    const dcSwitchStatusOptions = ['On', 'Off'];
    const statusOptions = ['Active', 'Inactive'];
    const userOptions = ["John", "Jacob", "Jennifer"]
    const roleOptions = ["Admin", "Standard User"]

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <Box sx={{ backgroundColor: 'white', padding: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2 }}>
                <Typography sx={{ color: '#E9513E', fontSize: '18px', fontWeight: 'bold' }}>Create an Issue</Typography>
                <Typography sx={{ color: 'text.secondary', marginBottom: 2, fontSize: '14px', }}>Last updated on 09.08.2022 04:03 am</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <CustomTextInput
                                    margin="normal"
                                    fullWidth={true}
                                    id="title"
                                    name="title"
                                    size='small'
                                    label='Title'
                                    InputProps={{
                                        style: inputBorder,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <FormControl
                                    margin="normal"
                                    fullWidth
                                    size="small"

                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Priority
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Priority"
                                        sx={{
                                            ...inputBorder,
                                        }}
                                    >
                                        {priorityOptions?.map((option, key) => (
                                            <MenuItem key={key} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <FormControl
                                    margin="normal"
                                    fullWidth
                                    size="small"

                                >
                                    <InputLabel id="demo-simple-select-label">
                                        DC Switch Status
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="DC Switch Status"
                                        sx={{
                                            ...inputBorder,
                                        }}
                                    >
                                        {dcSwitchStatusOptions?.map((option, key) => (
                                            <MenuItem key={key} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <FormControl
                                    margin="normal"
                                    fullWidth
                                    size="small"

                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Status
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Status"
                                        sx={{
                                            ...inputBorder,
                                        }}
                                    >
                                        {statusOptions?.map((option, key) => (
                                            <MenuItem key={key} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box
                                    sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    {/* <Switch
                                    id="toggle-switch"
                                    name="toggle-switch"
                                    color="primary"
                                    size="medium"
                                /> */}
                                    <CustomSwitch color={"#EF8439"} />
                                    <Typography sx={{ fontSize: '15px' }}>Electrical</Typography></Box>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={5.4} >
                                <CustomTextInput
                                    margin="normal"
                                    fullWidth={true}
                                    id="description"
                                    multiline={true}
                                    name="title"
                                    size="small"
                                    label="Description"
                                    rows={1}
                                    InputProps={{
                                        style: {
                                            height: '100px',
                                            overflowY: 'hidden',
                                            ...inputBorder,
                                        },
                                        inputProps: {
                                            style: {
                                                height: '80px',
                                                overflowY: 'hidden', // Ensure the same height for the input element
                                            },
                                        },
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <CustomTextInput
                                    margin="normal"
                                    fullWidth={true}
                                    id="Repair Date"
                                    name="Repair Date"
                                    size='small'
                                    label='Repair Date'
                                    InputProps={{
                                        style: inputBorder,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >

                                <CustomTextInput
                                    margin="normal"
                                    fullWidth={true}
                                    id="outlined-number"
                                    name="Time Estimate Hours"
                                    size='small'
                                    label='Time Estimate Hours'
                                    type="number"
                                    inputProps={{
                                        min: 0,
                                    }}
                                    InputProps={{
                                        style: inputBorder,
                                    }}
                                />


                            </Grid>
                            <Grid item xs={12} sm={6} md={1} sx={{ display: 'flex', height: '80px' }}>
                                <Box
                                    sx={{ width: '100%', display: 'flex', alignItems: 'center', }}
                                >
                                    <CustomSwitch color={"#EF8439"} />
                                    <Typography sx={{ fontSize: '15px' }}>Hub</Typography></Box>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: '#E9513E', fontSize: '18px', fontWeight: 'bold' }}>Issue Contact</Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={5} >
                                <FormControl
                                    margin="normal"
                                    fullWidth
                                    size="small"

                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Select User
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Select User"
                                        sx={{
                                            ...inputBorder,
                                        }}
                                    >
                                        {userOptions?.map((option, key) => (
                                            <MenuItem key={key} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={5} >
                                <FormControl
                                    margin="normal"
                                    fullWidth
                                    size="small"

                                >
                                    <InputLabel id="demo-simple-select-label">
                                        Select Role
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Select Role"
                                        sx={{
                                            ...inputBorder,
                                        }}
                                    >
                                        {roleOptions?.map((option, key) => (
                                            <MenuItem key={key} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box
                                    sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <CustomButton
                                        variant="contained"
                                        sx={{
                                            borderRadius: 10,
                                            height: 40,
                                            minWidth: '200px',
                                            color: 'white',
                                            background: 'linear-gradient(180deg, #E7463F, #EF8439)',
                                            textTransform: 'none',
                                            fontSize:'10px !important'
                                        }}
                                        title='Assign'
                                        titleSize='14px'
                                        fontWeight="bold"
                                    />
                                </Box>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default IssuesForm;
