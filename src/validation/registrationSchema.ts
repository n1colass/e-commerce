import * as yup from "yup";

export const registrationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .max(15, "Password should be of maximum 15 characters length")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[^a-zA-Z]/,
      "Password must contain at least one non-letter character"
    )
    .required("Password is required"),
  name: yup
    .string()
    .min(3, "Password should be of minimum 3 characters length")
    .max(25, "Password should be of maximum 25 characters length")
    .required("Name is required"),
  surname: yup
    .string()
    .min(2, "Password should be of minimum 3 characters length")
    .max(40, "Password should be of maximum 40 characters length")
    .required("Surname is required"),
});
