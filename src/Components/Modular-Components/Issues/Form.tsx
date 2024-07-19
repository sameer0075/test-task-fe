import { Box, Grid } from "@mui/material";
import CustomTextInput from "../../Generic-Components/TextInput";
import { inputBorder } from "../Auth/styles";
import CustomSwitch from "../../Generic-Components/CustomSwitch";
import CustomButton from "../../Generic-Components/Button";
import CustomText from "../../Generic-Components/Text";
import { assignButtonStyles, formContainerStyles, formHeadingStyles, formSubHeadingStyles, inputPropStyles } from "./styles";
import CustomSelect from "../../Generic-Components/SelectInput";

function IssuesForm() {
    const priorityOptions = ['Low', 'Medium', 'High'];
    const dcSwitchStatusOptions = ['On', 'Off'];
    const statusOptions = ['Active', 'Inactive'];
    const userOptions = ["John", "Jacob", "Jennifer"]
    const roleOptions = ["Admin", "Standard User"]

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <Box sx={{ backgroundColor: 'white', padding: 2 }}>
            <Box sx={formContainerStyles}>

                <CustomText
                    sx={formHeadingStyles}
                    content={"Create Issue"}
                />
                <CustomText
                    sx={formSubHeadingStyles}
                    content={"Last updated on 09.08.2022 04:03 am"}
                />

            </Box>

            <Box sx={formContainerStyles}>
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
                                <CustomSelect
                                    inputLabel="Priority"
                                    options={priorityOptions}
                                    sx={inputBorder}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <CustomSelect
                                    inputLabel="DC Switch Status"
                                    options={dcSwitchStatusOptions}
                                    sx={inputBorder}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <CustomSelect
                                    inputLabel="Status"
                                    options={statusOptions}
                                    sx={inputBorder}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box
                                    sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <CustomSwitch color={"#EF8439"} />
                                    <CustomText
                                        sx={{ fontSize: '15px' }}
                                        content={"Electrical"}
                                    />
                                </Box>

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
                                    InputProps={inputPropStyles(inputBorder)}
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
                                    <CustomText
                                        sx={{ fontSize: '15px' }}
                                        content={"Hub"}
                                    />
                                </Box>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={formContainerStyles}>
                <CustomText
                    sx={formHeadingStyles}
                    content={"Issue Contact"}
                />

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={5} >
                                <CustomSelect
                                inputLabel="Select User"
                                options={userOptions}
                                sx={inputBorder}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={5} >
                            <CustomSelect
                                inputLabel="Select Role"
                                options={roleOptions}
                                sx={inputBorder}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box
                                    sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <CustomButton
                                        variant="contained"
                                        sx={assignButtonStyles}
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
