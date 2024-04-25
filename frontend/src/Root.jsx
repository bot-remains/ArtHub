import {useRef} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";

function Root() {
  const location = useLocation();
  const containerRef = useRef(null);

  const showNavbar = () => {
    return !["/signup", "/signin", "/upload-new-art"].includes(
      location.pathname,
    );
  };

  return (
    <>
      {showNavbar() && <Navbar />}{" "}
      <div
        className={`overflow-y-auto relative ${showNavbar() ? "mt-[72px] max-h-[90vh]" : ""}`}
        ref={containerRef}
      >
        <div className="px-4">
          <ScrollToTop containerRef={containerRef} />
          <Outlet />
        </div>
        {location.pathname === "/" && <Footer />}
      </div>
    </>
  );
}

export default Root;
