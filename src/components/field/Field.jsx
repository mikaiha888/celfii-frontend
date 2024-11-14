import { Field } from "formik";
import { TextInput, SelectInput, FileInput, ImageField } from "react-admin";

export const AdminField = ({ field }) => {
  switch (field.type) {
    case "textarea":
      return (
        <div className="mb-4 w-72">
          <TextInput
            source={field.source}
            label={field.label}
            placeholder={field.placeholder}
            className="w-full p-2 border rounded"
            validate={field.validate}
            resettable="true"
            multiline
          />
        </div>
      );

    case "select":
      return (
        <div className="mb-4 w-72">
          <SelectInput
            source={field.source}
            label={field.label}
            onChange={field.onChange}
            optionText={field.optionText}
            placeholder={field.placeholder}
            optionValue={field.optionValue}
            className="w-full p-2 border rounded"
            choices={field.options?.map((option) => ({
              id: option.id,
              name: option.name,
            }))}
            validate={field.validate}
          />
        </div>
      );

    case "file":
      return (
        <div className="mb-4 w-72">
          <FileInput
            source={field.source}
            label={field.label}
            accept={field.accept}
            multiple={field.multiple}
            onRemove={field.onImageRemove}
            placeholder={field.placeholder}
            defaultValue={
              field.defaultValue
                ? field.defaultValue.map((image) => ({
                    src: image.url,
                    title: image.altText,
                    id: image.id,
                  }))
                : null
            }
            validate={field.validate}
          >
            <ImageField source="url" title="altText" />
          </FileInput>
        </div>
      );

    default:
      return (
        <div className="mb-4 w-72">
          <TextInput
            label={field.label}
            source={field.source}
            disabled={field.disabled}
            validate={field.validate}
            placeholder={field.placeholder}
            className="w-full p-2 border rounded"
            resettable="true"
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
          className="w-full p-2 mb-4 text-black bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-300"
        />
      );

    case "select":
      return (
        <Field
          as="select"
          name={field.name}
          className="w-full p-2 mb-4 text-black bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-300"
        >
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
            className="w-full p-2 text-black bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-300"
          />
          {form.values[field.name] && form.values[field.name].length > 0 && (
            <div className="flex flex-wrap mt-2 image-preview">
              {form.values[field.name].map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  className="object-cover w-20 h-20 m-1 border border-gray-300 rounded"
                />
              ))}
            </div>
          )}
        </div>
      );

    default:
      return (
        <Field
          {...field}
          className="w-full p-2 mb-4 text-black bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-300"
        />
      );
  }
};
