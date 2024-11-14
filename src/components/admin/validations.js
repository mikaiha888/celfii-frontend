const required = () => (value) => value || value === 0 ? undefined : "Este campo es obligatorio";
const minLength = (min) => (value) =>
  value && value.length >= min ? undefined : `Debe tener al menos ${min} caracteres`;
const maxLength = (max) => (value) =>
  value && value.length <= max ? undefined : `Debe tener como máximo ${max} caracteres`;
const number = () => (value) => {
  if (value === undefined || value === null) return undefined;
  const valueStr = String(value);
  const regex = /^[0-9]+([.,]?[0-9]+)?$/;
  if (regex.test(valueStr)) return undefined;
  else return "Debe ser un número válido (puede usar punto o coma decimal)";
};
const stockNumber = () => (value) =>
  value === undefined || value === "" || value === null || /^[0-9]+$/.test(Number(value))
    ? undefined
    : "Debe ser un número válido";
const minValue = (min) => (value) => value >= min ? undefined : `Debe ser al menos ${min}`;
const maxImages = (max) => (value) => {
  if (value === null) return;
  return value && value.length <= max ? undefined : `Solo puedes subir hasta ${max} imágenes`;
};
const maxPrice = (max) => (value) => {
  if (value === undefined) return undefined;
  return value <= max ? undefined : `El precio no puede superar ${max}`;
};

export const productUpdateValidations = {
  name: [required(), minLength(1), maxLength(100)],
  stock: [required(), stockNumber(), minValue(0)],
  imei: [minLength(15), maxLength(15)],
  description: [],
  category: [required()],
  costUsd: [number(), maxPrice(9999)],
  costArs: [required(), number(), maxPrice(9999999)],
  priceUsd: [number(), maxPrice(999999999)],
  priceArs: [number(), maxPrice(999999999)],
  priceWholesale: [number(), maxPrice(999999999)],
  code: [required()],
  images: [maxImages(10)],
};

export const productCreateValidations = {
  name: [required(), minLength(1), maxLength(100)],
  stock: [stockNumber(), minValue(0)],
  imei: [minLength(15), maxLength(15)],
  description: [],
  category: [required()],
  costUsd: [number(), maxPrice(9999)],
  costArs: [required(), number(), maxPrice(9999999)],
  priceUsd: [number(), maxPrice(999999999)],
  priceArs: [number(), maxPrice(999999999)],
  priceWholesale: [number(), maxPrice(999999999)],
  code: [required()],
  images: [maxImages(10)],
};


export const categoryUpdateValidations = {
  name: [required(), minLength(1), maxLength(30)],
  image: [required()],
};
