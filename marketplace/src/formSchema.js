import * as yup from "yup";


export default yup.object().shape({
  userName: yup
    .string()
    .required("Username is required.")
    .min(3, "Minimum 3 characters.")
    .max(50, "You have reached the character limit"),
  firstname: yup
    .string()
    .required("First name is required.")
    .min( 3,"Must have 3 characters."),
  lastname: yup
    .string()
    .required("Last name is required.")
    .min(2,"Minimum 2 characters."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Must have valid email address."),
  password: yup
    .string()
    .required("Password is required.")
    .min(6,"Minimum of 6 characters")
    .max(50, "You have reached the character limit"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], null, "Password must match.")
})