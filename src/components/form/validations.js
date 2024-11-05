import * as Yup from "yup";

export const createUserValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be less than or equal to 50 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address")
    .max(100, "Email must be less than or equal to 100 characters"),

  password: Yup.string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(100, "Password must be less than or equal to 100 characters"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Debe ser un email válido").required("El email es obligatorio"),
  password: Yup.string().required("La contraseña es obligatoria"),
});

export const validateWithYup = (schema) => async (values) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {};
  } catch (error) {
    return error.inner.reduce((errors, err) => {
      errors[err.path] = err.message;
      return errors;
    }, {});
  }
};
