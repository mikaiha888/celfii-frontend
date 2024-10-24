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
  useNotify,
  useRefresh,
  FunctionField,
} from 'react-admin';
import RestoreIcon from '@mui/icons-material/Restore';
import { Button } from '@mui/material';
import dataProvider from '../../../view/admin-dashboard-page/dataProvider';
import  ProductFilterSidebar  from './ProductFilterSidebar';

export const ProductList = (props) => {
  return (
    <List
      title="Productos"
      {...props}
      perPage={25}
      rowsPerPageLabel="Filas por página"
      aside={<ProductFilterSidebar />}
      actions={
        <>
          <CreateButton label="Crear Producto" />
          <ExportButton label="Exportar Productos" />
        </>
      }
    >
      <ProductDataGrid />
    </List>
  );
};

const ProductDataGrid = () => {
  const { filterValues = {} } = useListContext();
  const showDeleted = filterValues.onlyDeleted || false;
  const notify = useNotify();
  const refresh = useRefresh();

  const handleRestore = async (id) => {
    try {
      await dataProvider.restore('products', { id });
      notify('Producto restaurado con éxito', { type: 'success' });
      refresh();
    } catch (error) {
      notify('Error al restaurar el producto', error, { type: 'error' });
    }
  };

  return (
    <Datagrid rowClick="edit">
      <TextField source="name" label="Nombre del Producto" />
      <ImageField source="images[0].url" label="Imagen" />
      <TextField source="category.name" label="Categoría" />
      <NumberField source="priceArs" label="Precio (ARS)" />
      <NumberField source="stock" label="Stock" />
      <TextField source="code" label="Código" />
      <NumberField source="view.counter" label="Vistas" />

      {showDeleted ? (
        <FunctionField
          label="Acciones"
          render={(record) => (
            <Button
              onClick={(event) => {
                event.stopPropagation();
                handleRestore(record.id);
              }}
              startIcon={<RestoreIcon />}
              style={{
                textTransform: 'none',
                padding: 0,
                minWidth: 'auto',
                color: '#1976d2',
              }}
            >
              Recuperar
            </Button>
          )}
        />
      ) : (
        <>
          <EditButton label="Editar" />
          <DeleteButton label="Eliminar" />
        </>
      )}
    </Datagrid>
  );
};

export default ProductList;
