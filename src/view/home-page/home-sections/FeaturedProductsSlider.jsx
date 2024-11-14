import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProductsSlider = ({ products }) => {
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-0 z-10 transition-transform duration-300 ease-in-out transform -translate-y-1/2 cursor-pointer hover:scale-125"
      style={{ top: "50%", left: "5px" }}
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-700 md:w-8 md:h-8 hover:text-gray-900" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-0 z-10 transition-transform duration-300 ease-in-out transform -translate-y-1/2 cursor-pointer hover:scale-125"
      style={{ top: "50%", right: "5px" }}
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-gray-700 md:w-8 md:h-8 hover:text-gray-900" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative px-2 mt-20">
      <h2 className="mx-4 mb-8 text-xl font-semibold md:text-2xl">
        Nuestros productos seleccionados
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <Link
              to={`/product/${product.id}`}
              className="flex flex-col items-center justify-center py-8 mb-12 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
            >
              <img
                src={product.images[0].url}
                alt={product.name}
                className="object-cover lg:w-48 lg:h-64 md:w-60 md:h-80 border-gray-50"
              />
              <h3 className="w-full mt-2 text-sm text-center text-gray-500 truncate md:w-max">
                {product.name}
              </h3>
              <p className="mt-1 font-semibold text-center text-md font-poppins">
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
