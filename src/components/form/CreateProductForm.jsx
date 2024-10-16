import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions";
import { createProductValidationSchema } from "./validations";

import GenericForm from "./GenericForm";

const CreateProductForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    id: "",
    name: "",
    description: "",
    category: "",
    priceArs: "",
    priceUsd: "",
    stock: "",
    code: "",
    imei: "",
    images: [],
  };

  const fields = [
    {
      name: "id",
      label: "Id del Producto",
      type: "text",
      placeholder: "Ingrese el numero id",
    },
    {
      name: "name",
      label: "Nombre del Producto",
      type: "text",
      placeholder: "Ingrese el nombre del producto",
    },
    {
      name: "description",
      label: "Descripción",
      type: "textarea",
      placeholder: "Ingrese la descripción del producto",
    },
    {
      name: "category",
      label: "Categoría",
      type: "select",
      options: [
        { value: "tech", label: "Tecnología" },
        { value: "home", label: "Hogar" },
      ],
    },
    {
      name: "priceArs",
      label: "Precio (ARS)",
      type: "number",
      placeholder: "Ingrese el precio en ARS",
    },
    {
      name: "priceUsd",
      label: "Precio (USD)",
      type: "number",
      placeholder: "Ingrese el precio en USD",
    },
    { name: "stock", label: "Stock", type: "number", placeholder: "Ingrese el stock" },
    { name: "code", label: "Código", type: "text", placeholder: "Ingrese el código del producto" },
    { name: "imei", label: "IMEI", type: "text", placeholder: "Ingrese el IMEI (15 caracteres)" },
    {
      name: "images",
      label: "Imágenes",
      type: "file",
      accept: "image/*",
      placeholder: "Sube las imágenes del producto",
      multiple: true,
    },
  ];

  return (
    <div>
      <h1>Create New Product</h1>
      <GenericForm
        initialValues={initialValues}
        validationSchema={createProductValidationSchema}
        fields={fields}
        onSubmit={(formData) => dispatch(createProduct(formData))}
        buttonLabel="Crear Producto"
      />
    </div>
  );
};
export default CreateProductForm;
