import { Field } from "formik";
import { TextInput, SelectInput, FileInput, ImageField, required } from "react-admin";

export const AdminField = ({ field }) => {
  switch (field.type) {
    case "textarea":
      return (
        <div className="mb-4">
          <TextInput
            source={field.source}
            label={field.label}
            multiline
            validate={field.validate ? [required()] : undefined}
            className="border p-2 rounded w-full"
          />
        </div>
      );

    case "select":
      return (
        <div className="mb-4">
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
            className="border p-2 rounded w-full"
            onChange={field.onChange} 
          />
        </div>
      );

    case "file":
      return (
        <div className="mb-4">
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
        </div>
      );

    default:
      return (
        <div className="mb-4">
          <TextInput
            source={field.source}
            label={field.label}
            validate={field.validate ? [required()] : undefined}
            className="border p-2 rounded w-full"
          />
        </div>
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
        <Field
          as="textarea"
          name={field.name}
          placeholder={field.placeholder}
          className="bg-white text-black p-2 rounded w-full border border-gray-300 focus:outline-none focus:ring focus:ring-red-300 mb-4"
        />
      );

    case "select":
      return (
        <Field as="select" name={field.name} className="bg-white text-black p-2 rounded w-full border border-gray-300 focus:outline-none focus:ring focus:ring-red-300 mb-4">
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      );

    case "file":
      return (
        <div className="mb-4">
          <input
            type="file"
            name={field.name}
            accept={field.accept}
            multiple={field.multiple}
            onChange={handleFileChange}
            className="bg-white text-black p-2 rounded w-full border border-gray-300 focus:outline-none focus:ring focus:ring-red-300"
          />
          {form.values[field.name] && form.values[field.name].length > 0 && (
            <div className="image-preview flex flex-wrap mt-2">
              {form.values[field.name].map((file, index) => (
                <img key={index} src={URL.createObjectURL(file)} alt={`preview-${index}`} className="h-20 w-20 object-cover m-1 border border-gray-300 rounded" />
              ))}
            </div>
          )}
        </div>
      );

    default:
      return (
        <Field
          {...field}
          className="bg-white text-black p-2 rounded w-full border border-gray-300 focus:outline-none focus:ring focus:ring-red-300 mb-4"
        />
      );
  }
};