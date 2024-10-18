import { List, Datagrid, TextField, Button, EditButton, DeleteButton } from 'react-admin';
import { useRedirect } from 'react-admin';

export const CategoryList = () => {
  const redirect = useRedirect();
  const handleAddCategory = () => {
    redirect('/admin/categories/create');
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button label="Agregar Categoría" onClick={handleAddCategory} />
      </div>
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
