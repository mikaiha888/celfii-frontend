import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProductsSlider = ({ products }) => {
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-0 z-10 transform -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
      style={{ top: "50%", left: "10px" }}
      onClick={onClick}>
      <ChevronLeft className="w-8 h-8 text-gray-700 hover:text-gray-900" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-0 z-10 transform -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
      style={{ top: "50%", right: "10px" }}
      onClick={onClick}>
      <ChevronRight className="w-8 h-8 text-gray-700 hover:text-gray-900" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: false,
  };

  return (
    <section className="container mt-20 relative">
      <h2 className="mx-4 mb-8 text-2xl font-semibold">Nuestros productos seleccionados</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col items-center mb-6 mt-6 justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <img
                src={product.images[0].url}
                alt={product.name}
                className="object-cover w-60 h-80 border-gray-50"
              />
              <h3 className="mt-2 text-sm text-gray-500 truncate w-max">{product.name}</h3>
              <p className="mt-1 font-semibold text-md font-poppins">ARS {product.priceArs}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProductsSlider;
