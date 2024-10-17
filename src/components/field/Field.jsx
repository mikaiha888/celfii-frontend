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
        <div>
          <input
            type="file"
            name={field.name}
            accept={field.accept}
            multiple={field.multiple}
            onChange={handleFileChange}
          />
          {form.values[field.name] && form.values[field.name].length > 0 && (
            <div className="image-preview">
              {form.values[field.name].map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                />
              ))}
            </div>
          )}
        </div>
      );

    default:
      return <Field {...field} />;
  }
};

export default FieldComponent;
