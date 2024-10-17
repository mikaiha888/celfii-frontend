import Cards from "../../components/cards/Cards";
import CreateProductForm from "../../components/form/CreateProductForm";

const Home = () => {
  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Accesorios para Celulares</h1>
      <Cards />
      <CreateProductForm />
    </div>
  );
};

export default Home;
