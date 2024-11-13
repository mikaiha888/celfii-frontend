import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ImageField,
  EditButton,
  CreateButton,
  useListContext,
  useNotify,
  useRefresh,
  FunctionField,
} from "react-admin";
import RestoreIcon from "@mui/icons-material/Restore";
import { Button } from "@mui/material";
import dataProvider from "../../../view/admin-dashboard-page/dataProvider";
import ProductFilterSidebar from "./ProductFilterSidebar";

export const ProductList = (props) => {
  return (
    <List
      title="Productos"
      {...props}
      perPage={25}
      aside={<ProductFilterSidebar />}
      actions={
        <>
          <CreateButton label="Crear Producto" />
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
      await dataProvider.restore("products", { id });
      notify("Producto restaurado con éxito", { type: "success" });
      refresh();
    } catch (error) {
      notify("Error al restaurar el producto", error, { type: "error" });
    }
  };

  return (
    <div style={{ marginRight: "20px" }}>
      <Datagrid>
        <TextField source="name" label="Nombre del Producto" sortable={false} />
        <ImageField source="images[0].url" label="Imagen" sortable={false} />
        <TextField source="category.name" label="Categoría" sortable={false} />
        <NumberField source="priceArs" label="Precio (ARS)" sortable={false} />
        <FunctionField
          label="Stock"
          render={(record) => (
            <span
              style={{
                color:
                  record.stock > 5
                    ? "green"
                    : record.stock > 1
                    ? "orange"
                    : "red",
                fontWeight: "bold",
              }}
            >
              {record.stock}
            </span>
          )}
        />

        <TextField source="code" label="Código" sortable={false} />
        <NumberField source="view.counter" label="Vistas" sortable={false} />

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
                  textTransform: "none",
                  padding: 0,
                  minWidth: "auto",
                  color: "#1976d2",
                }}
              >
                Recuperar
              </Button>
            )}
          />
        ) : (
          <EditButton label="Editar" />
        )}
      </Datagrid>
    </div>
  );
};

export default ProductList;
