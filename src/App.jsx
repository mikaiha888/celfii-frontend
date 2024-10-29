import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import Home from "./view/home-page/Home";
import Products from "./view/products-page/Products";
import AboutUs from "./view/aboutus-page/AboutUs";
import Contact from "./view/contact-page/Contact";
import Profile from "./view/profile-page/Profile";
import Settings from "./view/settings-page/Settings";
import Login from "./view/login-page/Login";
import Footer from "./components/footer/Footer";
import ProductDetailPage from "./view/product-detail-page/ProductDetailPage";
import AdminDashboard from "./view/admin-dashboard-page/AdminDashboard";
import FavouritePage from "./view/favourite-page/FavouritePage";
import PrivacyPolicyPage from "./view/privacy-policy-page/PrivacyPolicyPage";
import FAQPage from "./view/faq-page/FAQPage";
import TermsOfService from "./view/terms-of-service-page/TermsOfService";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      <div className="App">
        {!isAdminRoute && <NavBar />}
        <div className="App-Container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/configuracion" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/favourites" element={<FavouritePage />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/terminos-servicio" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default App;
