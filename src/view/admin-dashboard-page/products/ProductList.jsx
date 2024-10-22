import { useEffect, useState } from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  TextInput,
  SelectInput,
  Filter,
  DeleteButton,
  EditButton,
  ImageField,
  useDataProvider,
} from 'react-admin';

const ProductFilter = (props) => {
  const [categories, setCategories] = useState([]);
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await dataProvider.getList('categories', {
          pagination: { page: 1, perPage: 100 },
          sort: { field: 'name', order: 'ASC' },
          filter: {},
        });
        setCategories(data.map(({ id, name }) => ({ id, name })));
      } catch (error) {
        console.error('Error al cargar las categorías:', error);
      }
    };

    fetchCategories();
  }, [dataProvider]);

  return (
    <Filter {...props}>
      <TextInput source="name" label="Buscar por Nombre" alwaysOn />
      <TextInput source="minPrice" label="Precio Mínimo" />
      <TextInput source="maxPrice" label="Precio Máximo" />
      <SelectInput
        source="category"
        label="Categoría"
        choices={categories}
        optionValue="name"
        alwaysOn
      />
      <SelectInput
        source="sort"
        label="Ordenar por"
        choices={[
          { id: 'most popular', name: 'Más Popular' },
          { id: 'highest price', name: 'Precio más Alto' },
          { id: 'lowest price', name: 'Precio más Bajo' },
          { id: 'newest', name: 'Más Nuevo' },
        ]}
        alwaysOn
      />
    </Filter>
  );
};

export const ProductList = (props) => (
  <List title="Productos" {...props} filters={<ProductFilter />} perPage={25}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nombre del Producto" />
      <ImageField source="images[0].url" label="Imagen" />
      <TextField source="category.name" label="Categoría" />
      <NumberField source="priceArs" label="Precio (ARS)" />
      <NumberField source="stock" label="Stock" />
      <TextField source="code" label="Código" />
      <NumberField source="view.counter" label="Vistas" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar"  />
    </Datagrid>
  </List>
);

export default ProductList;
