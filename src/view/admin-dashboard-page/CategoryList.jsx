import { List, Datagrid, TextField } from 'react-admin';

export const CategoryList = () => (
  <List pagination={false}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nombre de la Categoría" />
    </Datagrid>
  </List>
);
