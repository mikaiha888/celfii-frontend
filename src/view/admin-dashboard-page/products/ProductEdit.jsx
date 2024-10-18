import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  SaveButton,
  Toolbar,
  useNotify,
  useRefresh,
  useRedirect,
  useDataProvider,
  SelectInput,
  FileInput,
  FileField,
} from 'react-admin';
import { useEffect, useState } from 'react';

const ProductEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const ProductEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dataProvider
      .getList('categories', { pagination: {}, sort: {}, filter: {} })
      .then(({ data }) => {
        setCategories(data.map((category) => ({ id: category.id, name: category.name })));
      })
      .catch((error) => {
        notify(`Error al cargar categorías: ${error.message}`, { type: 'warning' });
      });
  }, [dataProvider, notify]);

  const handleSave = async (data) => {
    try {
      await dataProvider.update('products', { id: data.id, data });
      notify('Producto actualizado con éxito');
      redirect('list', 'products');
      refresh();
    } catch {
      notify('Error al actualizar el producto', { type: 'warning' });
    }
  };

  return (
    <Edit {...props}>
      <SimpleForm onSubmit={handleSave}>
        <TextInput source="id" disabled />
        <TextInput source="name" label="Nombre del Producto" />
        <TextInput source="description" label="Descripción" />
        <SelectInput source="category" label="Categoría" choices={categories} />
        <NumberInput source="priceArs" label="Precio (ARS)" />
        <NumberInput source="priceUsd" label="Precio (USD)" />
        <NumberInput source="stock" label="Stock" />
        <TextInput source="code" label="Código" />
        <TextInput source="imei" label="IMEI" />
        <FileInput source="images" label="Imágenes" accept="image/*" multiple>
          <FileField source="src" title="title" />
        </FileInput>
        <ProductEditToolbar />
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
