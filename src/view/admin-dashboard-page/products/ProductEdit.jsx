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
} from 'react-admin';

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
        <TextInput source="category.name" label="Categoría" />
        <NumberInput source="priceArs" label="Precio (ARS)" />
        <NumberInput source="priceUsd" label="Precio (USD)" />
        <NumberInput source="stock" label="Stock" />
        <TextInput source="code" label="Código" />
        <TextInput source="imei" label="IMEI" />
        <ProductEditToolbar />
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
