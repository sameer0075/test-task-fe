import { useState } from "react";

import { Container, Grid, Box, FormControlLabel, IconButton, InputAdornment } from "@mui/material";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Formik } from "formik";


import CustomTextInput from "../../Generic-Components/TextInput";
import CustomButton from "../../Generic-Components/Button";
import { authInitialState } from "../../../Schemas/initialStates";
import { authSchema } from "../../../Schemas/schemas";
import CustomText from "../../Generic-Components/Text";
import { GradientCheckbox } from "./styled-components";
import { loginText, inputLabel, inputLabelText, inputBorder } from "./styles";
/**
 * AuthLayout component is the main layout for the authentication page.
 * It contains the login form and an image on the right side.
 *
 * @returns {JSX.Element} The AuthLayout component.
 */
const AuthLayout = () => {
    // State to track whether the password is visible or not
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    /**
     * Toggles the password visibility.
     *
     * @return {void}
     */
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleRememberMe = () => {
        setRememberMe((prev) => !prev);
    }

    const handleSubmitData = (data: any) => {
        if (rememberMe) {
            localStorage.setItem("username", data.username);
            localStorage.setItem("token", "ENCRYPTED_TOKEN");
        } else {
            sessionStorage.setItem("username", data.username);
            sessionStorage.setItem("token", "ENCRYPTED_TOKEN");
        }

        window.location.href = '/dashboard';
    }

    return (
        <Container component="main">
            {/* Grid container for the layout */}
            <Grid container spacing={2} justifyContent="center" sx={{ maxHeight: '100vh', mt: 10 }}>
                {/* Login form */}
                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <img src="/images/sunflow.png" alt="Logo" width="214" height="55" />
                        <Box sx={{ marginTop: 8, }}>
                            {/* Title */}
                            <CustomText
                                sx={loginText}
                                content="Log in to your account"
                            />
                            {/* Login form */}
                            <Formik
                                initialValues={authInitialState}
                                validationSchema={authSchema}
                                onSubmit={(values) => handleSubmitData(values)}
                            >
                                {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
                                    <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                                        {/* Username input */}
                                        <Box sx={{ mb: 0.1 }}>
                                            <CustomTextInput
                                                margin="normal"
                                                fullWidth={true}
                                                id="username"
                                                name="username"
                                                size='medium'
                                                label={
                                                    <Box sx={inputLabel}>
                                                        <PermIdentityOutlinedIcon />
                                                        <CustomText sx={inputLabelText} content="Username" variant="subtitle1" />
                                                    </Box>
                                                }
                                                InputProps={{
                                                    style: inputBorder
                                                }}
                                                sx={{ width: '274px' }}
                                                error={Boolean(touched.username && errors.username)}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.username}

                                            />
                                            {errors.username && touched.username && <CustomText sx={{ color: 'red' }} content={errors.username} />}
                                        </Box>

                                        {/* Password input */}
                                        <Box sx={{ mb: 0.1 }}>
                                            <CustomTextInput
                                                margin="normal"
                                                fullWidth={true}
                                                name="password"
                                                type="password"
                                                id="password"
                                                sx={{ width: '274px' }}
                                                label={
                                                    <Box sx={inputLabel}>
                                                        <LockOutlinedIcon />
                                                        <CustomText sx={inputLabelText} content="Password" variant="subtitle1" />
                                                    </Box>
                                                }
                                                InputProps={{
                                                    style: inputBorder,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={togglePasswordVisibility} edge="end">
                                                                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                extraProps={
                                                    {
                                                        showPassword
                                                    }
                                                }
                                                error={Boolean(touched.password && errors.password)}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                            {errors.password && touched.password && <CustomText sx={{ color: 'red' }} content={errors.password} />}
                                        </Box>

                                        {/* Remember me checkbox */}
                                        <FormControlLabel
                                            control={<GradientCheckbox color="primary" />}
                                            label="Keep me logged in"
                                            onChange={toggleRememberMe}
                                        />

                                        {/* Login button */}
                                        <CustomButton
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                mt: 3,
                                                mb: 2,
                                                borderRadius: 10,
                                                height: 50,
                                                width: 280,
                                                display: 'block',
                                                background: 'linear-gradient(180deg, #E7463F, #EF8439)'
                                            }}
                                            title='Login'
                                            onSubmit={handleSubmit}
                                        />
                                    </Box>
                                )}
                            </Formik>
                        </Box>
                    </Box>
                </Grid>
                {/* Image on the right side */}
                <Grid item xs={12} md={9}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            padding: 2,
                            marginTop: 10
                        }}
                    >
                        <img
                            src='/images/auth-image.png'
                            alt="Auth"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AuthLayout;