import * as Yup from "yup";

export const createProductValidationSchema = Yup.object().shape({
  imei: Yup.string().length(15, "El IMEI debe tener 15 caracteres"),
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
