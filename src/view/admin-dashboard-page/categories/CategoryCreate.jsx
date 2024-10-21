import { Create, SimpleForm, TextInput, useNotify, useRefresh, useRedirect } from 'react-admin';
import { useDataProvider } from 'react-admin';

const required = (value) => (value ? undefined : 'El nombre es obligatorio');
const validateLetters = (value) => 
  /^[A-Za-z\s]+$/.test(value) ? undefined : 'El nombre solo puede contener letras y espacios';

const CategoryCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();

  const handleCreate = async (data) => {
    try {
      await dataProvider.create('categories', { data });
      notify('Categoría creada con éxito');
      redirect('/admin/categories');
      refresh();
    } catch (error) {
      notify(`Error: ${error.message}`, { type: 'warning' });
    }
  };

  return (
    <Create title="Crear categoria"{...props}>
      <SimpleForm onSubmit={handleCreate}>
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
