import dataProvider from "../../../view/admin-dashboard-page/dataProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Edit, Loading, useNotify, useRedirect } from "react-admin";
import { loadCategories, loadProduct } from "../../../redux/actions";
import { createProductValidationSchema } from "../validations";

import ProductForm from "../../../components/form/ProductForm";

const ProductEdit = () => {
  const dispatch = useDispatch();
  const notify = useNotify();
  const redirect = useRedirect();
  const [imagesToDelete, setImagesToDelete] = useState([]);

  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const handleImageRemove = (removedImage) => {
    setImagesToDelete((prev) => [...prev, removedImage]);
  };

  const handleSubmit = async (data) => {
    try {
      await dataProvider.update("products", {
        id: product.id.toString(),
        data: {
          imagesToDelete,
          costArs: data.costArs ? data.costArs : null,
          costUsd: data.costUsd ? data.costUsd : null,
          priceArs: data.priceArs ? data.priceArs : null,
          priceUsd: data.priceUsd ? data.priceUsd : null,
          priceWholesale: data.priceWholesale ? data.priceWholesale : null,
          ...data,
        },
      });
      notify("Producto actualizado exitosamente", { type: "info" });
      redirect("/admin/products");
    } catch (error) {
      notify(`Error actualizando proyecto: ${error}`, { type: "warning" });
    }
  };

  useEffect(() => {
    dispatch(loadProduct(id));
    dispatch(loadCategories());
  }, [dispatch, id]);

  if (loading) return <Loading />;

  return (
    <Edit title="Editar producto">
      {product && (
        <ProductForm
          product={product}
          categories={categories}
          onSubmit={handleSubmit}
          onImageRemove={handleImageRemove}
          validationSchema={createProductValidationSchema}
        />
      )}
    </Edit>
  );
};

export default ProductEdit;
