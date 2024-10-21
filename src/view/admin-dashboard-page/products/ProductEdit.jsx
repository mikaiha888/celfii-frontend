import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  useNotify,
  useDataProvider,
  SelectInput,
  FileInput,
  FileField,
} from 'react-admin';
import { useEffect, useState } from 'react';

const ProductEdit = (props) => {
  const notify = useNotify();

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

  return (
    <Edit {...props}>
      <SimpleForm>
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
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
