import { Edit } from "react-admin";
import { AdminForm } from "../../form/Form";
import { FileInput, ImageField } from "react-admin";
import { categoryUpdateValidations } from "../validations";

const CategoryEdit = (props) => {
  const fields = [
    {
      type: "text",
      source: "name",
      placeholder: "Nombre de la categoría",
      label: "Nombre",
      validate: categoryUpdateValidations.name,
    },
  ];

  return (
    <Edit title="Editar categoria" {...props}>
      <AdminForm fields={fields}>
        <div className="mb-4 w-72">
          <FileInput
            source="image"
            label="Imagen"
            placeholder="Suelta los archivos para cargar o haz click para seleccionar"
            validate={categoryUpdateValidations.image}
          />
          <ImageField source="image" title="name" />
        </div>
      </AdminForm>
    </Edit>
  );
};

export default CategoryEdit;
