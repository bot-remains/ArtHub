import {Outlet, useLocation} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function Root() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="overflow-y-auto max-h-[90vh] ">
        <div className="px-4">
          <Outlet />
        </div>
        {location.pathname === "/" && <Footer />}
      </div>
    </>
  );
}

export default Root;
