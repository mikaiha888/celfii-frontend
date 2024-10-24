import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFavs } from "../../redux/actions";

import Cards from "../../components/cards/Cards";

const FavouritePage = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.cartFavs);

  useEffect(() => {
    dispatch(loadCartFavs("favourites"))
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Mis productos favoritos</h1>
      {favourites.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <Cards products={favourites} favourites={favourites} />
      )}
    </div>
  );
};

export default FavouritePage;
