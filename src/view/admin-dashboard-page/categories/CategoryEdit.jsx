import {
  Edit,
  SimpleForm,
  TextInput,
  SaveButton,
  Toolbar,
  useNotify,
  useRefresh,
  useRedirect,
  useDataProvider,
} from 'react-admin';

const CategoryEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const CategoryEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();

  const { record } = props;

  const handleSave = async (data) => {
    try {
      await dataProvider.update('categories', { id: record.id, data });
      notify('Categoría actualizada con éxito');
      redirect('list', 'categories');
      refresh();
    } catch {
      notify('Error al actualizar la categoría', { type: 'warning' });
    }
  };

  return (
    <Edit {...props}>
      <SimpleForm onSubmit={handleSave}>
        <TextInput source="id" disabled />
        <TextInput source="name" label="Nombre de la Categoría" />
        <CategoryEditToolbar />
      </SimpleForm>
    </Edit>
  );
};

export default CategoryEdit;
