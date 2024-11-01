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
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          closeOnClick
          pauseOnHover
          draggable
        />
        {!pathname.startsWith("/admin") && <NavBar />}
        <div className="flex-1">
          <AppRoutes />
        </div>
        <WhatsAppButton />
        <Footer />
      </div>
    </>
  );
};

export default App;
