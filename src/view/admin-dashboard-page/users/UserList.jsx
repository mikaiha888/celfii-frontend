import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const UserList = () => {
  return (
    <div>
      <List title="Usuarios" pagination={false} >
        <Datagrid>
          <TextField source="id" label="ID" />
          <TextField source="username" label="Nombre de Usuario" />
          <TextField source="email" label="Correo Electrónico" />
          <EditButton label="Editar"  />
          <DeleteButton label="Eliminar"  />
        </Datagrid>
      </List>
    </div>
  );
};

export default UserList;
