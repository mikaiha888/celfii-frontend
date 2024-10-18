import {
  List,
  Datagrid,
  TextField,
  Button,
  EditButton,
  DeleteButton,
  useRedirect,
} from 'react-admin';

export const UserList = () => {
  const redirect = useRedirect();
  const handleAddUser = () => {
    redirect('/admin/users/create');
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button label="Agregar Usuario" onClick={handleAddUser} />
      </div>
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
