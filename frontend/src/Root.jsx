import {Outlet} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function Root() {
  return (
    <>
      <Navbar />
      <div className="overflow-y-auto max-h-[90vh] px-4">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
