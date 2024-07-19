import * as Yup from "yup";

const authSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

const issuesSchema = Yup.object({
    title: Yup.string().max(255).required('Title is required'),
    priority: Yup.string().max(255).required('Priority is required'),
    dcSwitchStatus: Yup.string().max(255).required('DC Switch Status is required'),
    status: Yup.string().max(255).required('Status is required'),
    description: Yup.string().max(255).required('Description is required'),
    repairDate: Yup.string().max(255).required('Repair Date is required'),
    timeEstimateHours: Yup.number().required('Time Estimate Hours is required'),
})

export { authSchema, issuesSchema }