import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFavs, loadCategories, loadProducts } from "../../redux/actions";

import HeroBanner from "./home-sections/HeroBanner";
import FeaturedProductsSlider from "./home-sections/FeaturedProductsSlider";
import CategoriesGrid from "./home-sections/CategoriesGrid";
import PurchaseInstructions from "./home-sections/PurchaseInstructions";
import MostPopular from "./home-sections/MostPopular";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const { favourites } = useSelector((state) => state.cartFavs);

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadCartFavs());
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div>
      <HeroBanner />
      <FeaturedProductsSlider products={products} />
      <MostPopular products={products} favourites={favourites} />
      <CategoriesGrid categories={categories} />
      <PurchaseInstructions />
    </div>
  );
};

export default HomePage;
