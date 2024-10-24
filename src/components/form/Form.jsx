import { SimpleForm } from "react-admin";
import { Formik, Form, ErrorMessage } from "formik";
import { AdminField, FormField } from "../field/Field";

export const AdminForm = ({ initialValues, fields, onSubmit }) => {
  return (
    <SimpleForm onSubmit={onSubmit} initialValues={initialValues}>
      {fields.map((field, index) => (
        <div key={index}>
          <AdminField field={field} />
        </div>
      ))}
    </SimpleForm>
  );
};

export const GenericForm = ({
  initialValues,
  validationSchema,
  fields,
  onSubmit,
  buttonLabel,
  children,
}) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting, ...form }) => (
        <Form>
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <FormField field={field} form={form} />
              <ErrorMessage name={field.name} component="div" />
            </div>
          ))}
          {children}
          <button type="submit" disabled={isSubmitting}>
            {buttonLabel}
          </button>
        </Form>
      )}
    </Formik>
  );
};
