import dataProvider from "../../../view/admin-dashboard-page/dataProvider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../../redux/actions";
import { productCreateValidations } from "../validations";
import { Create, useNotify, useRedirect } from "react-admin";

import ProductForm from "../../../components/form/ProductForm";

const ProductEdit = () => {
  const dispatch = useDispatch();
  const notify = useNotify();
  const redirect = useRedirect();

  const { categories } = useSelector((state) => state.categories);

  const handleSubmit = async (data) => {
    try {
      await dataProvider.create("products", { data });
      notify("Producto creado exitosamente", { type: "info" });
      redirect("/private-admin-console/products");
    } catch (error) {
      notify(`Error creando proyecto: ${error}`, { type: "warning" });
    }
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <Create title="Crear producto">
      <ProductForm
        categories={categories}
        onSubmit={handleSubmit}
        validate={productCreateValidations}
      />
    </Create>
  );
};

export default ProductEdit;
