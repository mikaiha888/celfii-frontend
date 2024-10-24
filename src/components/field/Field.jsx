import { Field } from "formik";
import { TextInput, SelectInput, FileInput, ImageField, required } from "react-admin";

export const AdminField = ({ field }) => {
  switch (field.type) {
    case "textarea":
      return (
        <TextInput
          source={field.source}
          label={field.label}
          multiline
          validate={field.validate ? [required()] : undefined}
        />
      );

    case "select":
      return (
        <SelectInput
          source={field.source}
          label={field.label}
          validate={field.validate ? [required()] : undefined}
          optionValue={field.optionValue}
          optionText={field.optionText}
          choices={field.options?.map((option) => ({
            id: option.id,
            name: option.name,
          }))}
        />
      );

    case "file":
      return (
        <FileInput
          source={field.source}
          label={field.label}
          accept={field.accept}
          multiple={field.multiple}
          validate={field.validate ? [required()] : undefined}
          onRemove={field.onImageRemove}
          defaultValue={field.defaultValue?.map((image) => ({
            src: image.url,
            title: image.altText,
            id: image.id,
          }))}
        >
          <ImageField source="src" title="title" />
        </FileInput>
      );

    default:
      return (
        <TextInput
          source={field.source}
          label={field.label}
          validate={field.validate ? [required()] : undefined}
        />
      );
  }
};

export const FormField = ({ field, form }) => {
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

