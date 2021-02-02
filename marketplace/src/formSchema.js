import * as yup from "yup";


export default yup.object().shape({
  username: yup
    .string()
    .required("Username is required.")
    .min(3, "Minimum 3 characters."),
  firstname: yup
    .string()
    .required("First name is required.")
    .min( 3,"Must have 3 characters."),
  lastname: yup
    .string()
    .required("Last name is required."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Must have valid email address."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6,"Minimum of 6 characters"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], null, "Password must match.")
})