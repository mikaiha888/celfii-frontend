import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav-bar/NavBar";
import WhatsAppButton from "./components/whatsapp-button/WhatsAppButton";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      <div className="App">
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          closeOnClick
          pauseOnHover
          draggable
        />
        {!isAdminRoute && <NavBar />}
        <AppRoutes />
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
};

export default App;
