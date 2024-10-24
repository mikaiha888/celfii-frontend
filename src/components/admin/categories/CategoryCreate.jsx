import { useDispatch } from "react-redux";
import { createCategory } from "../../../redux/actions";
import { Create, SimpleForm, TextInput } from "react-admin";

const CategoryCreate = (props) => {
  const dispatch = useDispatch();
  
  const required = (value) => (value ? undefined : "El nombre es obligatorio");
  const validateLetters = (value) =>
    /^[A-Za-z\s]+$/.test(value) ? undefined : "El nombre solo puede contener letras y espacios";

  return (
    <Create title="Crear categoria" {...props}>
      <SimpleForm onSubmit={(data) => dispatch(createCategory(data))}>
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
