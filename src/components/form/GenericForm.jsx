import { SimpleForm } from "react-admin";

import Field from "../field/Field";

const GenericForm = ({ initialValues, fields, onSubmit }) => {
  return (
    <SimpleForm onSubmit={onSubmit} initialValues={initialValues}>
      {fields.map((field, index) => (
        <div key={index}>
          <Field field={field} />
        </div>
      ))}
    </SimpleForm>
  );
};

export default GenericForm;
