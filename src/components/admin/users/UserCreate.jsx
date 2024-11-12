import { Create, SimpleForm, TextInput, useNotify, useRefresh, useRedirect } from "react-admin";
import { useDataProvider } from "react-admin";
import { useState } from "react";

const required = (value) => (value ? undefined : "El campo es obligatorio");

const UserCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const [showPassword, setShowPassword] = useState(false);

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
      <SimpleForm onSubmit={handleCreate} className="space-y-6">
        <TextInput
          source="username"
          label="Nombre de Usuario"
          validate={required}
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-black"
        />
        <TextInput
          source="email"
          label="Correo Electrónico"
          validate={required}
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-black"
        />

        <div className="my-4 relative">
          <TextInput
            source="password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            validate={required}
            className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
          >
            Crear Usuario
          </button>
        </div>
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
