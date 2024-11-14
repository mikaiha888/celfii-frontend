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
        {!pathname.startsWith("/private-admin-console") && <NavBar />}
        <main className={`flex-1 ${pathname !== "/" ? "px-5 py-4 md:mx-10" : ""}`}>
          <AppRoutes />
        </main>
        {!pathname.startsWith("/private-admin-console") && <WhatsAppButton />}
        <Footer />
      </div>
    </>
  );
};

export default App;
