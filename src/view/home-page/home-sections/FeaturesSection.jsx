import { Wrench, Package, ShoppingBag, MessageCircleReply } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section>
      <div className="container relative">
        <div className="flex flex-wrap justify-center my-24">
          <h2 className="pt-20 text-2xl font-semibold text-center border-t-8 border-primary">
            ¿Por Qué Elegir Cel-Fii?
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-center md:justify-around">
          <div className="shadow-md group hover:bg-[0_0] bg-custom-gradient bg-no-repeat bg-[0_0.62rem] flex flex-col items-center w-full gap-4 px-8 py-12 bg-white lg:w-2/5 2xl:w-1/5 transition-all duration-200">
            <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full">
              <div className="flex items-center justify-center transition-all duration-200 border-4 border-red-500 rounded-full group-hover:p-5">
                <ShoppingBag size={30} />
              </div>
            </div>
            <h3 className="my-3 text-xl font-semibold">Compra <br />Fácil y Rápida</h3>
            <p>
              Selecciona los productos que deseas comprar y agrégales al carrito para un proceso de
              compra rápido y sin complicaciones.
            </p>
          </div>
          <div className="shadow-md group hover:bg-[0_0] bg-custom-gradient bg-no-repeat bg-[0_0.62rem] flex flex-col items-center w-full gap-4 px-8 py-12 bg-white lg:w-2/5 2xl:w-1/5 transition-all duration-200">
            <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full">
              <div className="flex items-center justify-center transition-all duration-200 border-4 border-red-500 rounded-full group-hover:p-5">
                <Package size={30} />
              </div>
            </div>
            <h3 className="my-3 text-xl font-semibold">Consulta de Stock Disponible</h3>
            <p>
              Verifica fácilmente la disponibilidad de productos en nuestro stock. Siempre estarás
              informado sobre lo que tenemos disponible antes de realizar tu compra.
            </p>
          </div>
          <div className="shadow-md group hover:bg-[0_0] bg-custom-gradient bg-no-repeat bg-[0_0.62rem] flex flex-col items-center w-full gap-4 px-8 py-12 bg-white lg:w-2/5 2xl:w-1/5 transition-all duration-200">
            <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full">
              <div className="flex items-center justify-center transition-all duration-200 border-4 border-red-500 rounded-full group-hover:p-5">
                <MessageCircleReply size={30} />
              </div>
            </div>
            <h3 className="my-3 text-xl font-semibold">Asistencia en <br />WhatsApp</h3>
            <p>
              Una vez listo, haz clic en el botón para contactarnos a través de WhatsApp, donde
              recibirás asistencia personalizada para finalizar tu compra.
            </p>
          </div>
          <div className="shadow-md group hover:bg-[0_0] bg-custom-gradient bg-no-repeat bg-[0_0.62rem] flex flex-col items-center w-full gap-4 px-8 py-12 bg-white lg:w-2/5 2xl:w-1/5 transition-all duration-200">
            <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full">
              <div className="flex items-center justify-center transition-all duration-200 border-4 border-red-500 rounded-full group-hover:p-5">
                <Wrench size={30} />
              </div>
            </div>
            <h3 className="my-3 text-xl font-semibold">Reparaciones de Dispositivos</h3>
            <p>
              Además de productos, también aceptamos reparaciones. Comunícate con nosotros para más
              información sobre nuestros servicios de reparación.
            </p>
          </div>
        </div>
        <div className="absolute w-full py-30 bg-primary -z-10 top-1/2" />
      </div>
    </section>
  );
};
export default FeaturesSection;
