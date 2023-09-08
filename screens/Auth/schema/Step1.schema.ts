import * as yup from "yup";

const Step1ValidationSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is Required"),
  username: yup.string().required("Username is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  phoneNumber: yup
    .string()
    .min(
      13,
      ({ min }: any) => `Phone Number must be at least ${min} characters`
    )
    .required("Phone Number is required"),
});

export default Step1ValidationSchema;
