import { useDispatch } from "react-redux";
import { createUserValidationSchema } from "./validations";
import { createUser } from "../../redux/actions/usersActions";

import { GenericForm } from "./Form";

const UserForm = () => {
  const dispatch = useDispatch();

  const initialvalues = {
    username: "",
    email: "",
    password: "",
  };

  const fields = [
    {
      name: "username",
      label: "Nombre de usuario:",
      type: "text",
      placeholder: "Ingresar el nombre de usuario",
    },
    {
      name: "email",
      label: "Email:",
      type: "text",
      placeholder: "usuario123@ejemplo.com",
    },
    {
      name: "password",
      label: "Contraseña:",
      type: "password",
      placeholder: "Ingresar contraseña del usuario",
    },
  ];

  return (
    <div>
      <h1>Crear Nuevo Usuario</h1>
      <GenericForm
        initialvalues={initialvalues}
        validationSchema={createUserValidationSchema}
        fields={fields}
        onSubmit={(formData) => dispatch(createUser(formData))}
        buttonLabel="Crear Usuario"
      />
    </div>
  );
};
export default UserForm;
