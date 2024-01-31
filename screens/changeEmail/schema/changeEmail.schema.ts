import * as yup from "yup";

const changeEmailSchema = yup.object().shape({
  oldEmail: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("New email Address is Required"),
  confirmEmail: yup
    .string()
    .email("Please enter valid email")
    .oneOf([yup.ref("email")], "Your emails does not must match")
    .required("Confirm your email Address"),
});

export default changeEmailSchema;
