import { Field } from "formik";

const FieldComponent = ({ field, form }) => {
  const handleFileChange = (e) => {
    const { files } = e.currentTarget;
    const fileArray = Array.from(files);
    form.setFieldValue(field.name, fileArray);
  };

  switch (field.type) {
    case "textarea":
      return (
        <Field as="textarea" name={field.name} placeholder={field.placeholder} />
      );

    case "select":
      return (
        <Field as="select" name={field.name}>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      );

    case "file":
      return (
        <input
          type="file"
          name={field.name}
          accept={field.accept}
          multiple={field.multiple}
          onChange={handleFileChange}
        />
      );

    default:
      return <Field {...field} />;
  }
};

export default FieldComponent;
