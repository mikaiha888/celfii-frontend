import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings, products } from "../contants";

import Slider from "react-slick";

const FeaturedProductsSlider = () => (
  <section>
    <h2 className="mb-4 text-2xl font-bold">Teléfonos celulares destacados</h2>
    <Slider {...settings}>
      {products.map((product) => (
        <div key={product.id} className="p-2">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-48 rounded-md"
            />
            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <p className="font-semibold text-blue-600">Precio: ARS {product.price}</p>
          </div>
        </div>
      ))}
    </Slider>
  </section>
);

export default FeaturedProductsSlider;
