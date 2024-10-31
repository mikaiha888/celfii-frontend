import Cards from "../../../components/cards/Cards";

const MostPopular = ({ products, favourites }) => (
  <section className="p-20 mt-20 bg-gray-50">
    <div className="container m-auto">
      <h2 className="mx-4 mb-8 text-2xl font-semibold">Los más populares</h2>
      <Cards products={products} favourites={favourites} />
    </div>
  </section>
);

export default MostPopular;
