import { loginValidationSchema } from "./validations";

import GenericForm from "./GenericForm";

const LoginFotm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const fields = [
    {
      name: "email",
      label: "Email:",
      type: "text",
      placeholder: "usuario123@ejemplo.com",
    },
    {
      name: "description",
      label: "Contraseña:",
      type: "password",
      placeholder: "Tu contraseña",
    },
  ];

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <GenericForm
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        fields={fields}
        onSubmit
        buttonLabel="Iniciar Sesión"
      />
    </div>
  );
};
export default LoginFotm;
