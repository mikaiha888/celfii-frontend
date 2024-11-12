import { SimpleForm } from "react-admin";
import { Formik, Form, ErrorMessage } from "formik";
import { AdminField, FormField } from "../field/Field";

export const AdminForm = ({ initialvalues, fields, onSubmit, children }) => (
  <SimpleForm onSubmit={onSubmit} initialvalues={initialvalues}>
    <div>
      {fields.map((field, index) => (
        <AdminField key={index} field={field} />
      ))}
      {children}
    </div>
  </SimpleForm>
);

export const GenericForm = ({
  initialValues,
  validationSchema,
  fields,
  onSubmit,
  buttonLabel,
  children,
}) => (
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
    {({ isSubmitting, ...form }) => (
      <Form className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block mb-1 text-sm font-semibold text-gray-600">
              {field.label}
            </label>
            <FormField
              field={field}
              form={form}
              className="w-full px-4 py-3 text-gray-900 transition-all bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
            />
            <ErrorMessage name={field.name} component="div" className="mt-1 text-sm text-red-500" />
          </div>
        ))}
        {children}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 mt-4 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition-all ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {buttonLabel}
        </button>
      </Form>
    )}
  </Formik>
);
