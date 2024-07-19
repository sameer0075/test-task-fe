import { Box, Container, Grid } from "@mui/material";

import CustomTextInput from "../../Generic-Components/TextInput";
import { inputBorder } from "../Auth/styles";
import CustomSwitch from "../../Generic-Components/CustomSwitch";
import CustomButton from "../../Generic-Components/Button";
import CustomText from "../../Generic-Components/Text";
import { assignButtonStyles, formContainerStyles, formHeadingStyles, formSubHeadingStyles, inputPropStyles } from "./styles";
import CustomSelect from "../../Generic-Components/SelectInput";
import { Field, Formik } from "formik";
import { issuesInitialState } from "../../../Schemas/initialStates";
import { issuesSchema } from "../../../Schemas/schemas";
import ActionButtons from "./ActionButtons";
import CustomTable from "../../Generic-Components/Table";
import options from "../../../mock-data/options.json";
import { useDispatch } from "react-redux";
import { IssuesList, saveIssue } from "../../../redux/slices/issue-slice";

function IssuesForm(props: any) {
    const { errors,
        handleBlur,
        handleChange,
        touched,
        values,
        setFieldValue } = props

        {console.log("errors", errors)}
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
                                    error={Boolean(touched.title && errors.title)}
                                    // helperText={(touched.title && errors.title) ? (touched.title && errors.title) : ` `}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.title}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <CustomSelect
                                    inputLabel="Priority"
                                    options={options.priorityOptions}
                                    sx={inputBorder}
                                    value={values.priority}
                                    onChange={handleChange}
                                    name="priority"
                                />

                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <CustomSelect
                                    inputLabel="DC Switch Status"
                                    options={options.dcSwitchStatusOptions}
                                    sx={inputBorder}
                                    value={values.dcSwitchStatus}
                                    onChange={handleChange}
                                    name="dcSwitchStatus"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <CustomSelect
                                    inputLabel="Status"
                                    options={options.statusOptions}
                                    sx={inputBorder}
                                    value={values.status}
                                    onChange={handleChange}
                                    name="status"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box
                                    sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <CustomSwitch
                                        color={"#EF8439"}
                                        checked={values.electrical}
                                        onChange={() => {
                                            setFieldValue('electrical', !values.electrical)
                                        }} />
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
                                    name="description"
                                    size="small"
                                    label="Description"
                                    rows={1}
                                    InputProps={inputPropStyles(inputBorder)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.description}
                                    error={Boolean(touched.description && errors.description)}
                                // helperText={(touched.description && errors.description) ? (touched.description && errors.description) : ` `}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >
                                <CustomTextInput
                                    margin="normal"
                                    fullWidth={true}
                                    id="repairDate"
                                    name="repairDate"
                                    size='small'
                                    label='Repair Date'
                                    InputProps={{
                                        style: inputBorder,
                                    }}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.repairDate}
                                    error={Boolean(touched.repairDate && errors.repairDate)}
                                // helperText={(touched.repairDate && errors.repairDate) ? (touched.repairDate && errors.repairDate) : ` `}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={2.7} >

                                <CustomTextInput
                                    margin="normal"
                                    fullWidth={true}
                                    id="outlined-number"
                                    name="timeEstimateHours"
                                    size='small'
                                    label='Time Estimate Hours'
                                    type="number"
                                    inputProps={{
                                        min: 0,
                                    }}
                                    InputProps={{
                                        style: inputBorder,
                                    }}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.timeEstimateHours}
                                    error={Boolean(touched.timeEstimateHours && errors.timeEstimateHours)}
                                // helperText={(touched.timeEstimateHours && errors.timeEstimateHours) ? (touched.timeEstimateHours && errors.timeEstimateHours) : ` `}
                                />


                            </Grid>
                            <Grid item xs={12} sm={6} md={1} sx={{ display: 'flex', height: '80px' }}>
                                <Box
                                    sx={{ width: '100%', display: 'flex', alignItems: 'center', }}
                                >
                                    <CustomSwitch color={"#EF8439"}
                                        checked={values.hub}
                                        onChange={() => {
                                            setFieldValue('hub', !values.electrical)
                                        }} />
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
                            <Field
                                name="user"
                                as={CustomSelect}
                                inputLabel="Select User"
                                options={options.userOptions.map((user: any) => user)}
                                sx={{ marginBottom: '16px' }}
                                value={values.user}
                                onChange={handleChange}
                                error={Boolean(touched.user && errors.user)}
                            />
                                {/* <CustomSelect
                                    inputLabel="Select User"
                                    options={options.userOptions.map((user: any) => user)}
                                    sx={inputBorder}
                                    value={values.user}
                                    error={Boolean(touched.user && errors.user)}
                                    onChange={handleChange}
                                    name="user"
                                /> */}
                            </Grid>
                            <Grid item xs={12} sm={6} md={5} >
                                <Field
                                    name="role"
                                    as={CustomSelect}
                                    inputLabel="Select Role"
                                    options={options.roleOptions}
                                    sx={inputBorder}
                                    value={values.role}
                                    onChange={handleChange}
                                    error={Boolean(touched.role && errors.role)}
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


const Form = (props: any) => {
    const dispatch: any = useDispatch();
    const handleSaveIssue = (values: any) => {
        const payloadUser = {
            id: values.user.id,
            name: values.user.name,
            email: values.user.email,
            phone: values.user.phone,
            role: values.role
        }

        dispatch(saveIssue(payloadUser))
            .then((response: any) => {
                dispatch(IssuesList())
            })
            .catch(() => { });
    }
    return (
        <Formik
            initialValues={issuesInitialState}
            validationSchema={issuesSchema}
            onSubmit={(data) => handleSaveIssue(data)}
        >
            {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                setFieldValue,
                values
            }): JSX.Element => (
                <form
                    noValidate
                    onSubmit={handleSubmit}
                    {...props}
                >
                    <Container maxWidth="xl">
                        {/* Action buttons */}
                        <Grid item xs={12} md={4} sx={{ pt: 4, pb: 3 }}>
                            <ActionButtons handleSubmit={handleSubmit} />
                        </Grid>
                        {/* Main content */}
                        <Grid position="relative" sx={{ backgroundColor: "white", height: '80vh', borderRadius: '16px', py: 2 }}>
                            {/* Grid container for the layout */}
                            <Grid container spacing={2}>
                                {/* Form component */}
                                <Grid item xs={12}>
                                    <Grid item sx={{ px: 5 }}>
                                        <IssuesForm
                                            errors={errors}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            touched={touched}
                                            values={values}
                                            setFieldValue={setFieldValue}
                                        />
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

                </form>
            )}
        </Formik>
    )
}

export default Form;
