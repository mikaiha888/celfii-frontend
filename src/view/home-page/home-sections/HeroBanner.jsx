import heroImage from "../../../assets/hero-image.png";

const HeroBanner = () => (
  <section className="px-8 mt-8 sm:px-20 lg:container grid grid-cols-1 lg:grid-cols-2 min-h-[650px] relative bg-red-50">
    <div className="flex flex-col justify-center py-4 md:py-0">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-5xl font-bold leading-normal uppercase lg-text-6xl">
          Conectando tecnología <span className="text-primary">innovadora.</span>{" "}
        </h1>
        <p className="pr-0 lg:pr-15 xl:pr-0 text-gray-600 xl-max-w-[400px]">
          Descubre la tecnología que transforma tu día a día. Encuentra lo último en dispositivos y
          accesorios, con sorpresas que mejoran tu experiencia.
        </p>
        <div className="flex justify-center items-center gap-4 lg:justify-start !mt-4">
          <button className="flex items-center gap-2 mt-4 primary-btn">Explorar</button>
          <br />
          <button className="flex items-center gap-2 mt-4 text-btn">Sobre nosotros</button>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex lg:items-center lg:justify-center">
      <img
        src={heroImage}
        alt="hero-image"
        className="md:w-[550px] drop-shadow"
      />
    </div>
  </section>
);

export default HeroBanner;
