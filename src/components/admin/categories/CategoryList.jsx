import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  CreateButton,
} from "react-admin";

const CategoryList = () => {
  return (
    <div>
      <List
        title="Categorias"
        pagination={false}
        actions={
          <div>
            <CreateButton label="Crear Categoria" />
          </div>
        }
      >
        <Datagrid>
          <TextField source="name" label="Nombre de la Categoría" />
          <EditButton label="Editar" />
          <DeleteButton label="Eliminar" />
        </Datagrid>
      </List>
    </div>
  );
};

export default CategoryList;
