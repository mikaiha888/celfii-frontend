import { useDispatch } from 'react-redux';
import { createProduct, saveProduct } from '../../redux/actions';
import { createProductValidationSchema } from './validations';

import GenericForm from './GenericForm';

const CreateProductForm = ({ product }) => {
  const dispatch = useDispatch();

  const initialValues = product || {
    id: '',
    name: '',
    description: '',
    category: '',
    priceArs: '',
    priceUsd: '',
    stock: '',
    code: '',
    imei: '',
    images: [],
  };

  const fields = [
    {
      name: 'id',
      label: 'Id del Producto',
      type: 'text',
      placeholder: 'Ingrese el numero id',
      disabled: !!product,
    },
    {
      name: 'name',
      label: 'Nombre del Producto',
      type: 'text',
      placeholder: product ? product.name : 'Ingrese el nombre del producto',
    },
    {
      name: 'description',
      label: 'Descripción',
      type: 'textarea',
      placeholder: product ? product.description : 'Ingrese la descripción del producto',
    },
    {
      name: 'category',
      label: 'Categoría',
      type: 'select',
      options: [
        { value: 'tech', label: 'Tecnología' },
        { value: 'home', label: 'Hogar' },
      ],
    },
    {
      name: 'priceArs',
      label: 'Precio (ARS)',
      type: 'number',
      placeholder: product ? product.priceArs : 'Ingrese el precio en ARS',
    },
    {
      name: 'priceUsd',
      label: 'Precio (USD)',
      type: 'number',
      placeholder: product ? product.priceUsd : 'Ingrese el precio en USD',
    },
    { name: 'stock', label: 'Stock', type: 'number', placeholder: product ? product.stock : 'Ingrese el stock', },
    { name: 'code', label: 'Código', type: 'text', placeholder: product ? product.code : 'Ingrese el código del producto', },
    { name: 'imei', label: 'IMEI', type: 'text', placeholder: product ? product.imei : 'Ingrese el IMEI (15 caracteres)' },
    {
      name: 'images',
      label: 'Imágenes',
      type: 'file',
      accept: 'image/*',
      placeholder: 'Sube las imágenes del producto',
      multiple: true,
    },
  ];

  const handleSubmit = (formData) => {
    if (product) {
      dispatch(saveProduct(formData));
    } else {
      dispatch(createProduct(formData));
    }
  };

  return (
    <div>
      <h1>Crear nuevo producto</h1>
      <GenericForm
        initialValues={initialValues}
        validationSchema={createProductValidationSchema}
        fields={fields}
        onSubmit={handleSubmit}
        buttonLabel={product ? 'Actualizar Producto' : 'Crear Producto'}
      />
    </div>
  );
};
export default CreateProductForm;
