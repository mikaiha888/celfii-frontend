import dataProvider from "../../../view/admin-dashboard-page/dataProvider";
import { AdminForm } from "../../form/Form";
import { categoryUpdateValidations } from "../validations";
import { Create, useRedirect, FileInput, ImageField, useNotify } from "react-admin";

const CategoryEdit = (props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const fields = [
    {
      type: "text",
      source: "name",
      placeholder: "Nombre de la categoría",
      label: "Nombre",
      validate: categoryUpdateValidations.name,
    },
  ];

  const handleSubmit = async (data) => {
    try {
      await dataProvider.create("categories", { data });
      notify("Categoría creada exitosamente", { type: "info" });
      redirect("/private-admin-console/categories");
    } catch (error) {
      notify(`Error creando categoría: ${error}`, { type: "warning" });
    }
  };

  return (
    <Create title="Crear categoria" {...props}>
      <AdminForm fields={fields} onSubmit={handleSubmit}>
        <div className="mb-4 w-72">
          <FileInput
            source="image"
            label="Imagen"
            placeholder="Suelta los archivos para cargar o haz click para seleccionar"
            validate={categoryUpdateValidations.image}
          >
            <ImageField source="image" title="name" />
          </FileInput>
        </div>
      </AdminForm>
    </Create>
  );
};

export default CategoryEdit;
