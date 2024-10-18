import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  useNotify,
  useRefresh,
  useRedirect,
  FileInput,
  FileField,
} from 'react-admin';
import { useDataProvider } from 'react-admin';
import { useEffect, useState } from 'react';
import { uploadImages } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const required = (value) => (value ? undefined : 'El campo es obligatorio');

const ProductCreate = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await dataProvider.getList('categories', {
          pagination: {},
          sort: {},
          filter: {},
        });
        setCategories(data.map(({ id, name }) => ({ id, name })));
      } catch (error) {
        notify(`Error al cargar categorías: ${error.message}`, { type: 'warning' });
      }
    };

    fetchCategories();
  }, [dataProvider, notify]);

  const handleFileChange = (event) => {
    setImageFiles(Array.from(event.target.files));
  };

  const handleCreate = async (data) => {
    try {
      const selectedCategory = categories.find((cat) => cat.id === data.category);
      if (selectedCategory) {
        data.category = selectedCategory.name;
      }

      const { data: createdProduct } = await dataProvider.create('products', { data });

      if (imageFiles.length > 0) {
        await dispatch(uploadImages({ id: createdProduct.id, images: imageFiles }));
      }

      notify('Producto creado con éxito');
      redirect('/admin/products');
      refresh();
    } catch (error) {
      notify(`Error: ${error.message}`, { type: 'warning' });
    }
  };

  return (
    <Create {...props}>
      <SimpleForm onSubmit={handleCreate}>
        <TextInput source="id" label="Id del producto" validate={required} />
        <TextInput source="name" label="Nombre del Producto" validate={required} />
        <TextInput source="description" label="Descripción" />
        <SelectInput source="category" label="Categoría" choices={categories} validate={required} />
        <NumberInput source="priceArs" label="Precio (ARS)" validate={required} />
        <NumberInput source="priceUsd" label="Precio (USD)" />
        <NumberInput source="stock" label="Stock" validate={required} />
        <TextInput source="code" label="Código" />
        <TextInput source="imei" label="IMEI" />
        <FileInput
          source="images"
          label="Imágenes"
          accept="image/*"
          multiple
          onChange={handleFileChange}
        >
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
