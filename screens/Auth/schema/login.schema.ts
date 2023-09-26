import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }: any) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export default LoginValidationSchema;
