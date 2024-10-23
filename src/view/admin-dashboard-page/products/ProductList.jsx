import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../../redux/actions";
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
} from "react-admin";

const ProductFilter = (props) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(loadCategories())
  }, []);

  return (
    <Filter {...props}>
      <TextInput source="name" label="Buscar por Nombre" alwaysOn />
      <TextInput source="minPrice" label="Precio Mínimo" />
      <TextInput source="maxPrice" label="Precio Máximo" />
      <SelectInput
        source="category.name"
        label="Categoría"
        choices={categories}
        optionValue="name"
        alwaysOn
      />
      <SelectInput
        source="sort"
        label="Ordenar por"
        choices={[
          { id: "most popular", name: "Más Popular" },
          { id: "highest price", name: "Precio más Alto" },
          { id: "lowest price", name: "Precio más Bajo" },
          { id: "newest", name: "Más Nuevo" },
        ]}
        alwaysOn
      />
    </Filter>
  );
};

export const ProductList = () => (
  <List title="Productos" filters={<ProductFilter />} perPage={25}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Nombre del Producto" />
      <ImageField source="images[0].url" label="Imagen" />
      <TextField source="category.name" label="Categoría" />
      <NumberField source="priceArs" label="Precio (ARS)" />
      <NumberField source="stock" label="Stock" />
      <TextField source="code" label="Código" />
      <NumberField source="view.counter" label="Vistas" />
      <EditButton label="Editar" basePath="/products" />
      <DeleteButton label="Eliminar" undoable={false} />
    </Datagrid>
  </List>
);

export default ProductList;
