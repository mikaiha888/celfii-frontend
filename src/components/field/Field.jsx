import { TextInput, SelectInput, FileInput, ImageField, required } from "react-admin";

const Field = ({ field }) => {
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

export default Field;
