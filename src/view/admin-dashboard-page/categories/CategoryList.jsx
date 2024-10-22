import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const CategoryList = () => {
  return (
    <div>
      <List title="Categorias" pagination={false}>
        <Datagrid>
          <TextField source="name" label="Nombre de la Categoría" />
          <EditButton label="Editar" />
          <DeleteButton label="Eliminar"  />
        </Datagrid>
      </List>
    </div>
  );
};

export default CategoryList;
