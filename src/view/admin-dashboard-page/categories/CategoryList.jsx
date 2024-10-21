import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const CategoryList = () => {
  return (
    <div>
      <List title="Categorias" pagination={false}>
        <Datagrid>
          <TextField source="id" label="ID" />
          <TextField source="name" label="Nombre de la Categoría" />
          <EditButton label="Editar"  basePath="/categories" />
          <DeleteButton label="Eliminar" undoable={false} />
        </Datagrid>
      </List>
    </div>
  );
};

export default CategoryList;
