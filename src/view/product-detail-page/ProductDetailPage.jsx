import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '../../redux/actions/productsActions';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProduct(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (error) {
    return <p>Error al cargar detalles del producto: {error}</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Precio: ARS {product.priceArs}</p>
      <p>Precio: USD {product.priceUsd}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
