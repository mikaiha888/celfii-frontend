import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/nav-bar/NavBar";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/whatsapp-button/WhatsAppButton";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
    <div className="overflow-x-hidden">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover
        draggable
      />
      {!pathname.startsWith("/admin") && <NavBar />}
      <AppRoutes />
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
};

export default App;
