import { List, Datagrid, TextField, NumberField, Pagination, TextInput } from 'react-admin';

const ProductPagination = (props) => <Pagination {...props} rowsPerPageOptions={[10, 20, 50]} />;

export const ProductList = (props) => (
  <List
    {...props}
    pagination={<ProductPagination />}
    filters={[
      <TextInput source="name" label="Buscar por Nombre" alwaysOn />,
      <TextInput source="minPrice" label="Precio Mínimo" />,
      <TextInput source="maxPrice" label="Precio Máximo" />,
    ]}
  >
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nombre del Producto" />
      <TextField source="description" label="Descripción" />
      <NumberField source="priceArs" label="Precio (ARS)" />
      <NumberField source="priceUsd" label="Precio (USD)" />
    </Datagrid>
  </List>
);
