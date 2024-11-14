import { Routes, Route } from "react-router-dom";

import Login from "../view/login-page/Login";
import FAQPage from "../view/faq-page/FAQPage";
import HomePage from "../view/home-page/HomePage";
import CartPage from "../view/cart-page/CartPage";
import AboutUs from "../view/aboutus-page/AboutUs";
import Contact from "../view/contact-page/Contact";
import Profile from "../view/profile-page/Profile";
import Settings from "../view/settings-page/Settings";
import ProductsPage from "../view/products-page/ProductsPage";
import FavouritePage from "../view/favourite-page/FavouritePage";
import AdminDashboard from "../view/admin-dashboard-page/AdminDashboard";
import TermsOfService from "../view/terms-of-service-page/TermsOfService";
import PrivacyPolicyPage from "../view/privacy-policy-page/PrivacyPolicyPage";
import ProductDetailPage from "../view/product-detail-page/ProductDetailPage";
// import Reparaciones from "../view/repair-page/repair";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="*" element={<HomePage />} />
    <Route path="/private-admin-entry" element={<Login />} />
    <Route path="/faq/:faqId?" element={<FAQPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/perfil" element={<Profile />} />
    <Route path="/contacto" element={<Contact />} />
    <Route path="/nosotros" element={<AboutUs />} />
    <Route path="/productos" element={<ProductsPage />} />
    <Route path="/configuracion" element={<Settings />} />
    <Route path="/private-admin-console/*" element={<AdminDashboard />} />
    <Route path="/favourites" element={<FavouritePage />} />
    <Route path="/product/:id" element={<ProductDetailPage />} />
    <Route path="/terminos-servicio" element={<TermsOfService />} />
    <Route path="/productos/:categoria" element={<ProductsPage />} />
    <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
    {/* <Route path="/reparaciones" element={<Reparaciones />} /> */}
  </Routes>
);

export default AppRoutes;
