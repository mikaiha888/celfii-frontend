import { Show, SimpleShowLayout, TextField, NumberField, ImageField } from "react-admin";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadProduct } from '../../../redux/actions'

const ProductShow = (props) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const { id } = useParams()
  const { product } = useSelector(state => state.products)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadProduct(id))
  }, [dispatch])

  return (
    <Show title="Detalles del Producto" {...props}>
      <SimpleShowLayout
        className={`p-6 rounded-lg shadow-md max-w-4xl mx-auto my-6 ${
          isDarkMode ? "bg-[theme.palette.background.paper]" : "bg-white"
        }`}>
        <div className="mb-8 text-center">
          <TextField
            source="name"
            className={`${isDarkMode ? "text-white" : "text-black"}`}
            style={{ fontSize: "2rem" }}
          />
        </div>

        <div className="mb-6 border-b pb-4">
          <h2
            className={`text-2xl font-semibold ${
              isDarkMode ? "text-secondary.main" : "text-red-600"
            } mb-4`}>
            Información Básica
          </h2>
          <div className={`flex flex-col space-y-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
            <div>
              <span className="font-semibold">Descripción:</span>
              <TextField source="description" />
            </div>
            <div>
              <span className="font-semibold">Categoría:</span>
              <TextField source="category.name" />
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-4 rounded-lg shadow ${isDarkMode ? "bg-red-900" : "bg-red-50"}`}>
            <h3
              className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"} mb-2`}>
              Precios
            </h3>
            <div className={`space-y-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
              <div>
                <span className="font-semibold">Precio (ARS):</span>
                <NumberField source="priceArs" />
              </div>
              <div>
                <span className="font-semibold">Precio (USD):</span>
                <NumberField source="priceUsd" />
              </div>
              <div>
                <span className="font-semibold">Precio Mayorista (ARS):</span>
                <NumberField source="priceWholesale" />
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-lg shadow ${isDarkMode ? "bg-red-900" : "bg-red-50"}`}>
            <h3
              className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"} mb-2`}>
              Costos
            </h3>
            <div className={`space-y-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
              <div>
                <span className="font-semibold">Costo (USD):</span>
                <NumberField source="costUsd" />
              </div>
              <div>
                <span className="font-semibold">Costo (ARS):</span>
                <NumberField source="costArs" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 border-b pb-4">
          <h2
            className={`text-2xl font-semibold ${
              isDarkMode ? "text-secondary.main" : "text-red-600"
            } mb-4`}>
            Imágenes
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {product && product.images && product.images.length && product.images.map((_, index) => (
              <ImageField
                key={index}
                source={`images[${index}].url`}
                className="w-full h-32 m-0 flex justify-center items-center object-cover border-2"
              />
            ))}
          </div>
        </div>
        <div className="border-b pb-4">
          <h2
            className={`text-2xl font-semibold ${
              isDarkMode ? "text-secondary.main" : "text-red-600"
            } mb-4`}>
            Información Adicional
          </h2>
          <div className={`space-y-2 ${isDarkMode ? "text-white" : "text-gray-700"}`}>
            <div>
              <span className="font-semibold">ID:</span>
              <TextField source="id" />
            </div>
            <div>
              <span className="font-semibold">Stock:</span>
              <NumberField source="stock" />
            </div>
            <div>
              <span className="font-semibold">Código:</span>
              <TextField source="code" />
            </div>
            <div>
              <span className="font-semibold">IMEI:</span>
              <TextField source="imei" />
            </div>
            <div>
              <span className="font-semibold">Vistas:</span>
              <NumberField source="view.counter" />
            </div>
          </div>
        </div>

      </SimpleShowLayout>
    </Show>
  );
};

export default ProductShow;
