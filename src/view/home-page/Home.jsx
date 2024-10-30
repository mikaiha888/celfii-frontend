import OfferBanner from "./home-sections/OfferBanner";
import FeaturedProductsSlider from "./home-sections/FeaturedProductsSlider";
import CategoriesGrid from "./home-sections/CategoriesGrid";
import PurchaseInstructions from "./home-sections/PurchaseInstructions";
import MostPopular from "./home-sections/MostPopular";

const Home = () => {
  return (
    <div className="container p-6 mx-auto">
      <OfferBanner />
      <FeaturedProductsSlider />
      <MostPopular />
      <CategoriesGrid />
      <PurchaseInstructions />
    </div>
  );
};

export default Home;
