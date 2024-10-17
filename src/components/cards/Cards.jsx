import Card from '../card/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/productsActions';

const Cards = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error al cargar productos: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          images={product.images}
          title={product.name}
          price={product.priceArs}
        />
      ))}
    </div>
  );
};

export default Cards;
