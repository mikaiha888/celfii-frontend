import { List, Datagrid, TextField } from 'react-admin';

export const RoleList = () => (
  <List title="Roles" pagination={false}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Role Name" />
    </Datagrid>
  </List>
);
