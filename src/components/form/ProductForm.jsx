import { AdminForm } from "./Form";
import { useEffect, useState } from "react";

import { validateWithYup } from "./validations";

const ProductForm = ({ product, categories, onSubmit, onImageRemove, validationSchema, isEdit }) => {
  const initialValues = {
    id: product?.id || "",
    name: product?.name || "",
    description: product?.description || "Sin descripción disponible",
    category: product?.category?.name || "",
    costUsd: Number(product?.costUsd) === 0 ? "" : product?.costUsd,
    stock: product?.stock || 0,
    code: product?.code || "",
    imei: product?.imei || "",
    images: product?.images || [],
  };

  const [selectedCategory, setSelectedCategory] = useState(initialValues.category);

  useEffect(() => {
    setSelectedCategory(initialValues.category);
  }, [initialValues.category]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const fields = [
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
      onChange: handleCategoryChange,
    },
    {
      type: "number",
      source: "costUsd",
      label: "Costo (USD)",
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
    ...(selectedCategory === "Equipos"
      ? [
          {
            type: "text",
            source: "imei",
            label: "IMEI",
          },
        ]
      : []),
    {
      type: "file",
      source: "images",
      accept: "image/*",
      label: "Imágenes",
      multiple: true,
      defaultValue: product?.images || [],
      onImageRemove,
    },
  ];

  return (
    <div className="max-w-2xl p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">
        {product ? "Actualizar Producto" : "Crear Producto"}
      </h1>
      <AdminForm
        initialValues={initialValues}
        validationSchema={validateWithYup(validationSchema)}
        onSubmit={onSubmit}
        fields={fields}
      />
    </div>
  );
};

export default ProductForm;
