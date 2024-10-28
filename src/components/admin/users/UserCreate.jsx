import { Create, SimpleForm, TextInput, useNotify, useRefresh, useRedirect } from "react-admin";
import { useDataProvider } from "react-admin";

const required = (value) => (value ? undefined : "El campo es obligatorio");

const UserCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();

  const handleCreate = async (data) => {
    try {
      await dataProvider.create("users", { data });
      notify("Usuario creado con éxito");
      redirect("/admin/users");
      refresh();
    } catch (error) {
      notify(`Error: ${error.message}`, { type: "warning" });
    }
  };

  return (
    <Create title="Crear usuario" {...props}>
      <SimpleForm onSubmit={handleCreate}>
        <TextInput source="username" label="Nombre de Usuario" validate={required} />
        <TextInput source="email" label="Correo Electrónico" validate={required} />
        <TextInput source="password" label="Contraseña" type="password" validate={required} />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
