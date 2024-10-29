import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import { useEffect } from "react";
import { loadProducts } from "../../redux/actions";

const MostPopular = () => {
  const { products } = useSelector(state => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Nuestros productos más populares</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"> 
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
