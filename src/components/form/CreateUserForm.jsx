import { useDispatch, useSelector } from "react-redux";
import { createUserValidationSchema } from "./validations";
import { createUser } from "../../redux/actions/usersActions";

import GenericForm from "./GenericForm";

const CreateUserForm = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth)

  const initialValues = {
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
        initialValues={initialValues}
        validationSchema={createUserValidationSchema}
        fields={fields}
        onSubmit={(formData) => dispatch(createUser(formData, token))}
        buttonLabel="Crear Usuario"
      />
    </div>
  );
};
export default CreateUserForm;
