import { Edit, SimpleForm, TextInput } from 'react-admin';

const CategoryEdit = (props) => {
  return (
    <Edit title="Editar categoria"{...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" label="Nombre de la Categoría" />
      </SimpleForm>
    </Edit>
  );
};

export default CategoryEdit;
