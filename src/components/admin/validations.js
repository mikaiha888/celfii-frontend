import * as Yup from "yup";

export const createProductValidationSchema = Yup.object().shape({
  imei: Yup.string().length(15, "El IMEI debe tener 15 caracteres"),
});
