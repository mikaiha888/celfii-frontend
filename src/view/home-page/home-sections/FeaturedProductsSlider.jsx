import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../contants";
import { Link } from "react-router-dom";

import Slider from "react-slick";

const FeaturedProductsSlider = ({ products }) => (
  <section className="container mt-20">
    <h2 className="mx-4 mb-8 text-2xl font-semibold">Nuestros productos seleccionados</h2>
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id} className="pb-5">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.images[0].url}
              alt={product.name}
              className="object-cover w-60 h-80 border-gray-50"
            />
            <h3 className="my-3 text-sm text-gray-500 w-60">{product.name}</h3>
            <p className="text-sm font-semibold font-poppins">ARS $ {product.priceArs}</p>
          </Link>
        </div>
      ))}
    </Slider>
  </section>
);

export default FeaturedProductsSlider;
