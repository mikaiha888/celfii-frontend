import { useEffect } from "react";
import { loadProducts } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../../../components/cards/Cards";

const MostPopular = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <section className="p-6 mt-10 bg-gray-100 rounded-lg shadow-md">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
        <h2 className="mb-4 text-2xl font-bold">Nuestros productos más populares</h2>
        <Cards products={products} />
      </div>
    </section>
  );
};

export default MostPopular;
