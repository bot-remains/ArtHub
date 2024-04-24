import {useRef} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";

function Root() {
  const location = useLocation();
  const containerRef = useRef(null);

  return (
    <>
      <Navbar />
      <div className="overflow-y-auto max-h-[90vh] relative" ref={containerRef}>
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
