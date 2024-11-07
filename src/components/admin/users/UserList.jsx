import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  CreateButton,
} from "react-admin";

const UserList = () => {
  return (
    <div>
      <List
        title="Usuarios"
        pagination={false}
        actions={
          <div>
            <CreateButton label="Crear Usuario" />
          </div>
        }
      >
        <Datagrid>
          <TextField source="username" label="Nombre de Usuario" sortable={false} />
          <TextField source="email" label="Correo Electrónico"  sortable={false}/>
          <EditButton label="Editar" />
          <DeleteButton label="Eliminar" />
        </Datagrid>
      </List>
    </div>
  );
};

export default UserList;
