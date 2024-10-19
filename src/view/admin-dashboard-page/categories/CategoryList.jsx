import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const CategoryList = () => {
  return (
    <div>
      <List pagination={false}>
        <Datagrid>
          <TextField source="id" label="ID" />
          <TextField source="name" label="Nombre de la Categoría" />
          <EditButton basePath="/categories" />
          <DeleteButton undoable={false} />
        </Datagrid>
      </List>
    </div>
  );
};

export default CategoryList;
