import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ImageField,
  EditButton,
  DeleteButton,
  CreateButton,
  ExportButton,
  useListContext,
} from 'react-admin';
import { ProductFilterSidebar } from './ProductFilterSidebar';

export const ProductList = (props) => {
  return (
    <List
      title="Productos"
      {...props}
      perPage={25}
      rowsPerPageLabel="Filas por página"
      aside={<ProductFilterSidebar />}
      actions={
        <div>
          <CreateButton label="Crear Producto" />
          <ExportButton label="Exportar Productos" />
        </div>
      }
    >
      <ProductDataGrid />
    </List>
  );
};

const ProductDataGrid = () => {
  const { filterValues } = useListContext();
  const showDeleted = filterValues.onlyDeleted;

  return (
    <Datagrid>
      <TextField source="name" label="Nombre del Producto" />
      <ImageField source="images[0].url" label="Imagen" />
      <TextField source="category.name" label="Categoría" />
      <NumberField source="priceArs" label="Precio (ARS)" />
      <NumberField source="stock" label="Stock" />
      <TextField source="code" label="Código" />
      <NumberField source="view.counter" label="Vistas" />

      {!showDeleted && (
        <>
          <EditButton label="Editar" />
          <DeleteButton label="Eliminar" />
        </>
      )}
    </Datagrid>
  );
};

export default ProductList;
