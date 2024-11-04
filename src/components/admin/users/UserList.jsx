import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  CreateButton,
} from "react-admin";
import { ExportButton } from "../export-button/ExportButton";

const UserList = () => {
  return (
    <div>
      <List
        title="Usuarios"
        pagination={false}
        actions={
          <div>
            <CreateButton label="Crear Usuario" />
            <ExportButton label="Exportar Usuarios" />
          </div>
        }
      >
        <Datagrid>
          <TextField source="username" label="Nombre de Usuario" />
          <TextField source="email" label="Correo Electrónico" />
          <EditButton label="Editar" />
          <DeleteButton label="Eliminar" />
        </Datagrid>
      </List>
    </div>
  );
};

export default UserList;
