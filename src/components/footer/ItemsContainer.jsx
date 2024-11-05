import logo from "../../assets/logo-celfii1.png";
import {
  aboutUsLinks,
  customerServiceLinks,
  paymentMethodsLinks,
  popularCategoriesLinks,
} from "./menu";

import Items from "./Items";

const ItemsContainer = () => {
  return (
    <div className="container flex flex-wrap gap-20 py-24">
      <div className="w-full md:w-1/5">
        <button>
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
