import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import MostPopular from "../../components/most-popular/MostPopular";
import WhatsAppButton from "../../components/whatsapp-button/WhatsAppButton";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const products = [
    {
      id: 1,
      name: "Smartphone A1",
      description: "Pantalla 6.5'', 128GB, Cámara 48MP",
      price: 120000,
      image:
        "https://media.es.wired.com/photos/6557876f6ab5ab4fa8750f5f/master/w_2560%2Cc_limit/smartphones%25201456207880.jpg",
    },
    {
      id: 2,
      name: "Smartphone B2",
      description: "Pantalla 6.1'', 64GB, Cámara 12MP",
      price: 95000,
      image:
        "https://s2-techtudo.glbimg.com/w1Mv2bKbYRxfnZkKLkhtjQtyYfw=/0x0:695x348/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/R/f/RPkithRqGn2ia8Gq7Guw/iphone15-pro-cad-03.jpg",
    },
    {
      id: 3,
      name: "Smartphone C3",
      description: "Pantalla 6.7'', 256GB, Cámara 108MP",
      price: 180000,
      image: "https://i.ytimg.com/vi/xOqui37fS84/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "Smartphone D4",
      description: "Pantalla 6.3'', 128GB, Cámara 64MP",
      price: 135000,
      image: "https://http2.mlstatic.com/D_NQ_NP_809840-MLA74808087101_022024-O.webp",
    },
  ];

  // Categorías
  const categories = [
    {
      name: "Accesorios",
      link: "/categoria/accesorios",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQk9VQwgAicbc2qfmTG-9_4A4IEWPS7v50fw&s",
    },
    {
      name: "Repuestos",
      link: "/categoria/repuestos",
      image:
        "https://static.landkit.engeni.com/assets/2649/7a51a2c2-be1f-407f-ac9d-50d8cf89af35/1e3194e2acff4a5399c6.jpg",
    },
    {
      name: "Equipos",
      link: "/categoria/equipos",
      image: "https://www.cronista.com/files/image/419/419139/61d3378d218ac.jpg",
    },
    {
      name: "Electrónica",
      link: "/categoria/electronica",
      image:
        "https://electronicaonline.net/wp-content/uploads/2024/05/Historia-de-la-Electronica.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-6">

      <section>
        <h2 className="text-2xl font-bold mb-4">Teléfonos celulares destacados</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-48 rounded-md"
                />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-blue-600 font-semibold">Precio: ARS {product.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-md mt-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <MostPopular />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.name} to={category.link}>
              <div className="bg-white rounded-lg shadow-md p-4 text-center transform transition-transform duration-300 hover:scale-105">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-32 rounded-md mb-2"
                />
                <h3 className="text-lg font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">¿Cómo realizar tu compra?</h2>
        <p className="text-gray-700 mb-4">
          Nuestro e-commerce acepta pagos con cualquier tarjeta de crédito o débito. Sigue estos
          pasos para realizar tu compra:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Selecciona los productos que deseas comprar y agrégalos al carrito.</li>
          <li>Revisa el detalle de tu compra en el carrito.</li>
          <li>Una vez listo, haz clic en el botón que te llevará a nuestro WhatsApp.</li>
          <li>
            En WhatsApp, se enviará el mensaje con el detalle de tu compra y te asistiremos en la
            transacción.
          </li>
        </ul>
        <div className="text-center">
          <Link
            to="/carrito"
            className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">
            Ir al carrito de compras
          </Link>
          <WhatsAppButton/>
        </div>
      </section>
    </div>
  );
};

export default Home;
