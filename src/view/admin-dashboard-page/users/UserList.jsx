import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const UserList = () => {
  return (
    <div>
      <List pagination={false}>
        <Datagrid>
          <TextField source="id" label="ID" />
          <TextField source="username" label="Nombre de Usuario" />
          <TextField source="email" label="Correo Electrónico" />
          <EditButton basePath="/users" />
          <DeleteButton undoable={false} />
        </Datagrid>
      </List>
    </div>
  );
};

export default UserList;
