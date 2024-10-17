import { Formik, Form, ErrorMessage } from "formik";
import Field from "../field/Field";

const GenericForm = ({
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
              <Field field={field} form={form} />
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

export default GenericForm;
