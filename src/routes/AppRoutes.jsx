import { Routes, Route } from "react-router-dom";

import Login from "../view/login-page/Login";
import FAQPage from "../view/faq-page/FAQPage";
import HomePage from "../view/home-page/HomePage";
import CartPage from "../view/cart-page/CartPage";
import Profile from "../view/profile-page/Profile";
import Contact from "../view/contact-page/Contact";
import AboutUs from "../view/aboutus-page/AboutUs";
import Products from "../view/products-page/Products";
import Settings from "../view/settings-page/Settings";
import AdminDashboard from "../view/admin-dashboard-page/AdminDashboard";
import FavouritePage from "../view/favourite-page/FavouritePage";
import ProductDetailPage from "../view/product-detail-page/ProductDetailPage";
import TermsOfService from "../view/terms-of-service-page/TermsOfService";
import PrivacyPolicyPage from "../view/privacy-policy-page/PrivacyPolicyPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
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
);

export default AppRoutes;
