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
      redirect("/private-admin-console/users");
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
          className="block w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />
        <TextInput
          source="email"
          label="Correo Electrónico"
          validate={required}
          className="block w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />

        <div className="relative my-4">
          <TextInput
            source="password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            validate={required}
            className="block w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute text-gray-500 transform -translate-y-1/2 right-2 top-1/2 hover:text-red-500"
          >
            {showPassword ? "Ocultar" : "Mostrar"}
          </button>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 font-semibold text-white transition duration-200 bg-red-600 rounded-md hover:bg-red-700"
          >
            Crear Usuario
          </button>
        </div>
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
