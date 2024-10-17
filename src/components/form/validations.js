import * as Yup from 'yup';

export const createProductValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("El nombre del producto es obligatorio")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  description: Yup.string().required("La descripción es obligatoria"),
  category: Yup.string().required("La categoría es obligatoria"),
  priceArs: Yup.number()
    .required("El precio en ARS es obligatorio")
    .positive("El precio debe ser positivo"),
  priceUsd: Yup.number()
    .required("El precio en USD es obligatorio")
    .positive("El precio debe ser positivo"),
  stock: Yup.number()
    .required("El stock es obligatorio")
    .integer("El stock debe ser un número entero")
    .min(0, "El stock no puede ser negativo"),
  code: Yup.string(),
  imei: Yup.string().length(15, "El IMEI debe tener 15 caracteres"),
});

