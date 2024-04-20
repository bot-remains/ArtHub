import Navbar from "./components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <div className="overflow-y-auto max-h-[90vh] p-6">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
