import { createProductValidationSchema } from "./validations";

import GenericForm from "./GenericForm";

const ProductForm = ({ product, categories, onSubmit, onImageRemove }) => {
  const initialValues = {
    id: product?.id || "",
    name: product?.name || "",
    description: product?.description || "",
    category: product?.category || "",
    priceArs: product?.priceArs || "",
    priceUsd: product?.priceUsd || "",
    stock: product?.stock || "",
    code: product?.code || "",
    imei: product?.imei || "",
    images: product?.images || [],
  };

  const fields = [
    {
      type: "text",
      source: "id",
      label: "Id del producto",
    },
    {
      type: "text",
      source: "name",
      label: "Nombre",
    },
    {
      type: "textarea",
      source: "description",
      label: "Descripción",
    },
    {
      type: "select",
      source: "category.name",
      label: "Categoría",
      options: categories,
      optionValue: "name",
      optionText: "name",
    },
    {
      type: "number",
      source: "priceArs",
      label: "Precio (ARS)",
    },
    {
      type: "number",
      source: "priceUsd",
      label: "Precio (USD)",
    },
    {
      type: "number",
      source: "stock",
      label: "Stock",
    },
    {
      type: "text",
      source: "code",
      label: "Código",
    },
    {
      type: "text",
      source: "imei",
      label: "IMEI",
    },
    {
      type: "file",
      source: "images",
      accept: "image/*",
      label: "Imágenes",
      multiple: true,
      defaultValue: product && product.images ? product.images : null,
      onImageRemove
    },
  ];

  return (
    <div>
      <h1>{product ? "Actualizar Producto" : "Crear Producto"}</h1>
      <GenericForm
        initialValues={initialValues}
        validationSchema={createProductValidationSchema}
        onSubmit={onSubmit}
        fields={fields}
      />
    </div>
  );
};

export default ProductForm;
