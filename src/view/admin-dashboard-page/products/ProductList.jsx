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
} from 'react-admin';

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput source="name" label="Buscar por Nombre" alwaysOn />
    <TextInput source="minPrice" label="Precio Mínimo" />
    <TextInput source="maxPrice" label="Precio Máximo" />
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

export const ProductList = (props) => (
  <List {...props} filters={<ProductFilter />} perPage={25}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nombre del Producto" />
      <ImageField source="images[0].url" label="Imagen" />
      <TextField source="category.name" label="Categoría" />
      <NumberField source="priceArs" label="Precio (ARS)" />
      <NumberField source="stock" label="Stock" />
      <TextField source="code" label="Código" />
      <NumberField source="view.counter" label="Vistas" />
      <EditButton basePath="/products" />
      <DeleteButton undoable={false} />
    </Datagrid>
  </List>
);

export default ProductList;
