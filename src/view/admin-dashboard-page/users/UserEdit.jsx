import { Edit, SimpleForm, TextInput, useNotify, useRefresh, useRedirect } from 'react-admin';
import { useDataProvider } from 'react-admin';

const required = (value) => (value ? undefined : 'El campo es obligatorio');

const UserEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();

  const handleEdit = async (data) => {
    try {
      await dataProvider.update('users', { id: data.id, data });
      notify('Usuario actualizado con éxito');
      redirect('/admin/users');
      refresh();
    } catch (error) {
      notify(`Error: ${error.message}`, { type: 'warning' });
    }
  };

  return (
    <Edit {...props}>
      <SimpleForm onSubmit={handleEdit}>
        <TextInput source="username" label="Nombre de Usuario" validate={required} />
        <TextInput source="email" label="Correo Electrónico" validate={required} />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
