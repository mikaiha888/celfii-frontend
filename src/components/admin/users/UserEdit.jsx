import { useState } from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const required = (value) => (value ? undefined : "El campo es obligatorio");
const emailValidation = (value) =>
  value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? undefined
    : "El correo electrónico no es válido";

const UserEdit = (props) => {
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleResetPassword = () => {
    setShowPasswordInput(true);
    setPassword("");
  };

  return (
    <Edit title="Editar usuario" {...props}>
      <SimpleForm className="space-y-6">
        <TextInput
          source="username"
          label="Nombre de Usuario"
          validate={required}
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-black"
        />
        <TextInput
          source="email"
          label="Correo Electrónico"
          validate={[required, emailValidation]}
          className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-black"
        />

        <div className="my-4 relative">
          {!showPasswordInput ? (
            <button type="button" onClick={handleResetPassword} className="text-red-600 underline">
              Restablecer Contraseña
            </button>
          ) : (
            <div className="relative">
              <TextInput
                source="newPassword"
                label="Nueva Contraseña"
                type={showPassword ? "text" : "password"}
                helperText="Deja el campo vacío para mantener la contraseña actual"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          )}
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-200"
          >
            Guardar Cambios
          </button>
        </div>
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
