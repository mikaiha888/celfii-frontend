import logo from "../../assets/logo-celfii1.png";
import { useEffect } from "react";
import { loadCategories } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { aboutUsLinks, customerServiceLinks, paymentMethodsLinks } from "./menu";

import Items from "./Items";

const ItemsContainer = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const popularCategoriesLinks =
    categories &&
    categories
      .map((category) => ({
        name: category.name,
        url: "/productos",
        isCategory: true,
      }))
      .slice(0, 5);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <div className="container flex flex-wrap gap-20 py-24 md:justify-around">
      <div className="w-full lg:w-1/5">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="Cel-Fii logo" className="w-32 h-auto" />
        </button>
        <p className="mt-5 text-sm font-medium text-gray-400">
          En Cel-Fii, tu destino de tecnología, ofrecemos los mejores productos y accesorios para
          mejorar tu vida digital.
        </p>
      </div>
      <div className="hidden md:border-l-2" />
      <div className="grid grid-cols-1 gap-6 md:flex-1 sm:grid-cols-3 xl:grid-cols-4">
        <Items links={aboutUsLinks} title="Sobre Nosotros" />
        <Items links={customerServiceLinks} title="Servio al Cliente" />
        <Items links={popularCategoriesLinks} title="Categorías Populares" />
        <Items links={paymentMethodsLinks} title="Métodos de Pago" />
      </div>
    </div>
  );
};
export default ItemsContainer;
