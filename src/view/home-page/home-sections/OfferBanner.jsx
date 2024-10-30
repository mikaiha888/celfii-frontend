import { Link } from "react-router-dom";

const OfferBanner = () => (
  <section className="relative mb-10">
    <img
      src="https://tecstore.pe/media/magefan_blog/16celusPORTADA_1_.jpg"
      alt="Oferta semanal"
      className="object-cover w-full h-64 rounded-lg shadow-lg md:h-80 lg:h-96"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black rounded-lg bg-opacity-60">
      <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        ¡Oferta de la Semana!
      </h2>
      <p className="mb-6 text-lg text-white md:text-xl">
        Aprovecha nuestras ofertas en smartphones y accesorios seleccionados.
      </p>
      <Link
        to="/ofertas"
        className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Ver Ofertas
      </Link>
    </div>
  </section>
);

export default OfferBanner;
