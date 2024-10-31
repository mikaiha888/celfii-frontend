import Card from "../card/Card";

const Cards = ({ products, favourites }) => {
  return (
    <div className="flex flex-wrap justify-between gap-9">
      {products.map((product) => (
        <Card key={product.id} product={product} favourites={favourites} />
      ))}
    </div>
  );
};

export default Cards;
