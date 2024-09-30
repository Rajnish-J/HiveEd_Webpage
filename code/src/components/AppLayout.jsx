import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Content section below the navbar */}
      <main className="md:pt-[16vh] pb-8 md:pb-[12vh] mx-[4vw] md:mx-[9vw]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AppLayout;
