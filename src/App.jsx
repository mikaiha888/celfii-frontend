import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";

import Home from "./view/home-page/Home";
import Login from "./view/login-page/Login";
import FAQPage from "./view/faq-page/FAQPage";
import Footer from "./components/footer/Footer";
import CartPage from "./view/cart-page/CartPage";
import AboutUs from "./view/aboutus-page/AboutUs";
import Contact from "./view/contact-page/Contact";
import Profile from "./view/profile-page/Profile";
import Settings from "./view/settings-page/Settings";
import Products from "./view/products-page/Products";
import FavouritePage from "./view/favourite-page/FavouritePage";
import AdminDashboard from "./view/admin-dashboard-page/AdminDashboard";
import TermsOfService from "./view/terms-of-service-page/TermsOfService";
import PrivacyPolicyPage from "./view/privacy-policy-page/PrivacyPolicyPage";
import ProductDetailPage from "./view/product-detail-page/ProductDetailPage";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      <div className="App">
        {!isAdminRoute && <NavBar />}
        <div className="App-Container">
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            closeOnClick
            pauseOnHover
            draggable
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/configuracion" element={<Settings />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/favourites" element={<FavouritePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/terminos-servicio" element={<TermsOfService />} />
            <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default App;
