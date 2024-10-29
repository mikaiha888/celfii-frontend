import Card from "../card/Card";

const Cards = ({ products, favourites }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(
        (product) =>
          product.stock !== 0 && <Card key={product.id} product={product} favourites={favourites} />
      )}
    </div>
  );
};

export default Cards;
