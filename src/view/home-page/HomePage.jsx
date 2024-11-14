import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFavs, loadCategories, loadProducts } from "../../redux/actions";

import HeroBanner from "./home-sections/HeroBanner";
import MostPopular from "./home-sections/MostPopular";
import CategoriesGrid from "./home-sections/CategoriesGrid";
import FeaturesSection from "./home-sections/FeaturesSection";
import PurchaseInstructions from "./home-sections/PurchaseInstructions";
import FeaturedProductsSlider from "./home-sections/FeaturedProductsSlider";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const { favourites } = useSelector((state) => state.cartFavs);

  const mostPopularProducts = [...products].slice(0, 20);
  const selectedProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 10);

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadCartFavs());
    dispatch(loadProducts({ perPage: 100, sort: "most popular" }));
  }, [dispatch]);

  const handleCategoryClick = (categoryName) => {
    localStorage.setItem("selectedCategory", categoryName);
  };

  return (
    <div>
      <HeroBanner />
      <FeaturesSection />
      <MostPopular products={mostPopularProducts} favourites={favourites} />
      <FeaturedProductsSlider products={selectedProducts} />
      <CategoriesGrid categories={categories} onCategoryClick={handleCategoryClick} />
      <PurchaseInstructions />
    </div>
  );
};

export default HomePage;
