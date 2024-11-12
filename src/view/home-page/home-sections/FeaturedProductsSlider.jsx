import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProductsSlider = ({ products }) => {
  // Arrows with responsive sizing
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-0 z-10 transform -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
      style={{ top: "50%", left: "5px" }}
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-700 hover:text-gray-900" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-0 z-10 transform -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out"
      style={{ top: "50%", right: "5px" }}
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-gray-700 hover:text-gray-900" />
    </div>
  );

  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container mt-20 relative px-2">
      <h2 className="mx-4 mb-8 text-xl font-semibold md:text-2xl">
        Nuestros productos seleccionados
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col items-center justify-center mb-6 mt-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={product.images[0].url}
                alt={product.name}
                className="object-cover w-48 h-64 md:w-60 md:h-80 rounded border-gray-50"
              />
              <h3 className="mt-2 text-sm text-gray-500 truncate w-full text-center md:w-max">
                {product.name}
              </h3>
              <p className="mt-1 font-semibold text-md font-poppins text-center">
                ARS {product.priceArs}
              </p>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default FeaturedProductsSlider;
