import { AdminForm } from "./Form";
import { useEffect, useState } from "react";

const ProductForm = ({ product, categories, onSubmit, onImageRemove, validate }) => {
  const initialvalues = {
    id: product?.id || "",
    name: product?.name || "",
    description: product?.description || "Sin descripción disponible",
    category: product?.category || "",
    costArs: product?.costArs || 0,
    costUsd: product?.costUsd || 0,
    priceArs: product?.priceArs || 0,
    priceUsd: product?.priceUsd || 0,
    priceWholesale: product?.priceWholesale || 0,
    stock: product?.stock || 0,
    code: product?.code || "",
    imei: product?.imei || "",
    images: product?.images || null,
  };

  const [selectedCategory, setSelectedCategory] = useState(initialvalues.category);

  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);

  const fields = [
    {
      type: "text",
      source: "name",
      label: "Nombre",
      placeholder: "Nombre del producto",
      validate: validate ? validate.name : []
    },
    {
      type: "textarea",
      source: "description",
      label: "Descripción",
      placeholder: "Escribe la descripción del producto",
      validate: validate ? validate.description : []
    },
    {
      type: "select",
      source: "category.name",
      label: "Categoría",
      optionText: "name",
      optionValue: "name",
      options: categories,
      placeholder: "Selecciona la categoría",
      onChange: handleCategoryChange,
      validate: validate ? validate.category : []
    },
    {
      type: "number",
      source: "costUsd",
      label: "Costo (USD)",
      placeholder: "Costo ARS / [Tasa Dólar]",
      validate: validate ? validate.costUsd : []
    },
    {
      type: "number",
      source: "costArs",
      label: "Costo (ARS)",
      placeholder: "Costo USD * [Tasa Dólar]",
      validate: validate ? validate.costArs : []
    },
    {
      type: "number",
      source: "priceUsd",
      label: "Precio (USD)",
      placeholder: "Costo USD * 2",
      validate: validate ? validate.priceUsd : []
    },
    {
      type: "number",
      source: "priceArs",
      label: "Precio (ARS)",
      placeholder: "Costo USD * 2 * [Tasa Dólar]",
      validate: validate ? validate.priceArs : []
    },
    {
      type: "number",
      source: "priceWholesale",
      label: "Precio mayorista (ARS)",
      placeholder: "Costo USD * 1.5 * [Tasa Dólar]",
      validate: validate ? validate.priceWholesale : []
    },
    {
      type: "number",
      source: "stock",
      label: "Stock",
      placeholder: "1",
      defaultValue: 0,
      validate: validate ? validate.stock : []
    },
    {
      type: "text",
      source: "code",
      label: "Código",
      placeholder: "Código",
      validate: validate ? validate.code : []
    },
    ...(selectedCategory === "Equipos"
      ? [
          {
            type: "text",
            source: "imei",
            label: "IMEI",
            defaultValue: product?.imei || "",
            placeholder: "IMEI",
            validate: validate ? validate.imei : []
          },
        ]
      : []),
    {
      type: "file",
      source: "images",
      accept: "image/*",
      label: "Imágenes",
      multiple: true,
      placeholder: "Suelta los archivos para cargar o haz click para seleccionar",
      defaultValue: product?.images || null,
      onImageRemove,
      validate: validate ? validate.images : []
    },
  ];

  useEffect(() => {
    setSelectedCategory(initialvalues.category);
  }, [initialvalues.category]);

  return (
    <div className="max-w-2xl p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">
        {product ? "Actualizar Producto" : "Crear Producto"}
      </h1>
      <AdminForm initialvalues={initialvalues} onSubmit={onSubmit} fields={fields} />
    </div>
  );
};

export default ProductForm;
