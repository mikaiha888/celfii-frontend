import { useDispatch } from 'react-redux';
import { createCategory } from '../../../redux/actions';
import { Create, SimpleForm, TextInput, useRedirect } from 'react-admin';

const CategoryCreate = (props) => {
  const dispatch = useDispatch();
  const redirect = useRedirect();

  const required = (value) => (value ? undefined : 'El nombre es obligatorio');
  const validateLetters = (value) =>
    /^[A-Za-z\s]+$/.test(value) ? undefined : 'El nombre solo puede contener letras y espacios';

  const handleSubmit = (data) => {
    dispatch(createCategory(data));
    redirect('/admin/categories');
  };

  return (
    <Create title="Crear categoria" {...props}>
      <SimpleForm onSubmit={handleSubmit}>
        <TextInput
          source="name"
          label="Nombre de la Categoría"
          validate={[required, validateLetters]}
        />
      </SimpleForm>
    </Create>
  );
};

export default CategoryCreate;
