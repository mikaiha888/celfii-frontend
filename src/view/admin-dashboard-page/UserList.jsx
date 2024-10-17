import { List, Datagrid, TextField } from 'react-admin';

export const UserList = () => (
  <List pagination={false}>
    {' '}
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="username" label="Username" />
      <TextField source="email" label="Email" />
    </Datagrid>
  </List>
);
