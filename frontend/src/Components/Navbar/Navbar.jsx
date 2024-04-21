import {Link} from "react-router-dom";
import List from "./List";
import {FaPencilAlt} from "react-icons/fa";
import {useLocation} from "react-router-dom";

import SignInButton from "./SignInButton.jsx";

function Navbar() {
  // const location = useLocation();
  // if (location.pathname === "/signin" || location.pathname === "/signup") {
  //   return null;
  // }
  return (
    <nav className="bg-primary p-4 fixed w-full top-0 z-50 px-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link to="/" className="text-2xl font-bold flex ">
            <FaPencilAlt className="text-secondary" />
            <p className="text-white">&nbsp; ART</p>
            <p className="text-secondary">HUB</p>
          </Link>
        </div>
        <div className="flex justify-between items-center ">
          <ul className="flex space-x-8 items-center">
            <List goto="/" content="Home" />
            <List goto="/about" content="About" />
            <List goto="/explore" content="Explore" />
            {/* <List goto="/contact" content="Contact" /> */}
          </ul>
          <SignInButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
