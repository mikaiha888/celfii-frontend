import { Edit, SimpleForm, TextInput } from 'react-admin';

const required = (value) => (value ? undefined : 'El campo es obligatorio');

const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="username" label="Nombre de Usuario" validate={required} />
        <TextInput source="email" label="Correo Electrónico" validate={required} />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
