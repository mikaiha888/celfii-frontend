import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { loginValidationSchema } from "./validations";
import { GenericForm } from "./Form";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      name: "password",
      label: "Contraseña:",
      type: "password",
      placeholder: "Tu contraseña",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black">Iniciar sesión</h1>
        <GenericForm
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          fields={fields}
          onSubmit={(formData) => {
            dispatch(loginUser(formData));
            navigate("/");
          }}
          buttonLabel="Iniciar Sesión"
        />
      </div>
    </div>
  );
};

export default LoginForm;
