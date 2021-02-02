import * as yup from 'yup'

export default yup.object().shape({
    userName: yup
        .string()
        .required('Username is required')
        .min(3, "Username must be at least 3 characters")
        .max(50, "You have reached the character limit"),
    password: yup
        .string()
        .required('Password is required')
        .min(6, "Password must be at least 6 characters")
        .max(50, "You have reached the character limit"),
})