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

export const createProductValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("El nombre es obligatorio")
    .min(1, "El nombre debe tener al menos 1 carácter")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  description: Yup.string().optional(),

  priceArs: Yup.number()
    .required("El precio en ARS es obligatorio")
    .positive("El precio en ARS debe ser positivo")
    .max(9999999999.99, "El precio en ARS no puede superar los 10 dígitos")
    .optional(),

  priceUsd: Yup.number()
    .required("El precio en USD es obligatorio")
    .positive("El precio en USD debe ser positivo")
    .max(9999999999.99, "El precio en USD no puede superar los 10 dígitos")
    .optional(),

  priceWholesale: Yup.number()
    .required("El precio mayorista es obligatorio")
    .positive("El precio mayorista debe ser positivo")
    .max(9999999999.99, "El precio mayorista no puede superar los 10 dígitos")
    .optional(),

  costUsd: Yup.number()
    .required("El costo en USD es obligatorio")
    .positive("El costo en USD debe ser positivo")
    .max(9999.99, "El costo en USD no puede superar los 4 dígitos"),

  costArs: Yup.number()
    .required("El costo en ARS es obligatorio")
    .positive("El costo en ARS debe ser positivo")
    .max(9999999999.99, "El costo en ARS no puede superar los 10 dígitos")
    .optional(),

  stock: Yup.number()
    .required("El stock es obligatorio")
    .integer("El stock debe ser un número entero")
    .min(0, "El stock no puede ser negativo"),

  code: Yup.string(),

  imei: Yup.string().length(15, "El IMEI debe tener 15 caracteres").optional(),
});

export const updateProductValidationSchema = Yup.object()
  .shape({
    name: Yup.string().min(1, "El nombre debe tener al menos 1 carácter").optional(),

    description: Yup.string().optional(),

    priceArs: Yup.number()
      .positive("El precio en ARS debe ser positivo")
      .max(9999999999.99, "El precio en ARS no puede superar los 10 dígitos")
      .optional(),

    priceUsd: Yup.number()
      .positive("El precio en USD debe ser positivo")
      .max(9999999999.99, "El precio en USD no puede superar los 10 dígitos")
      .optional(),

    priceWholesale: Yup.number()
      .positive("El precio mayorista debe ser positivo")
      .max(9999999999.99, "El precio mayorista no puede superar los 10 dígitos")
      .optional(),

    costUsd: Yup.number()
      .positive("El costo en USD debe ser positivo")
      .max(9999.99, "El costo en USD no puede superar los 4 dígitos")
      .optional(),

    costArs: Yup.number()
      .positive("El costo en ARS debe ser positivo")
      .max(9999999999.99, "El costo en ARS no puede superar los 10 dígitos")
      .optional(),

    stock: Yup.number()
      .integer("El stock debe ser un número entero")
      .min(0, "El stock no puede ser negativo")
      .optional(),

    code: Yup.string().optional(),

    imei: Yup.string().length(15, "El IMEI debe tener 15 caracteres").optional(),
  })
  .test("at-least-one-field", "Debes proporcionar al menos un campo para actualizar", (value) =>
    Object.keys(value).some((key) => value[key] !== undefined)
  );
