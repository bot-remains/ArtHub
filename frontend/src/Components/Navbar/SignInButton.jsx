import {useState} from "react";
import {Link} from "react-router-dom";
import {
  FaRegUserCircle,
  FaHeadset,
  FaRegHeart,
  FaAngleUp,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import SignOut from "../SignOut/SignOut.jsx";

function SignInButton() {
  const currentUser = null;
  // const {currentUser} = useSelector((state) => state.user);

  const [showMenu, setShowMenu] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowMenu(false);
    }, 100);
  };

  return (
    <div className="relative">
      <Link
        to="/profile"
        className={`${
          showMenu ? "bg-secondary text-white" : "text-white"
        } flex p-2 ml-6 rounded justify-evenly items-center`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <FaRegUserCircle /> &nbsp;{" "}
        {currentUser ? currentUser.name.substring(0, 5) : "Sign In"}
        &nbsp;{" "}
        <FaAngleUp
          className={`transform ${
            showMenu
              ? "rotate-[0deg] transition-transform duration-[450ms]"
              : "rotate-[-180deg] transition-transform duration-[450ms]"
          }`}
        />
      </Link>
      {showMenu && (
        <div
          className="absolute top-[45px] left-[-80%] bg-white shadow rounded-lg w-[250px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="list-none p-0 m-0">
            {currentUser ? null : (
              <Link to="/signup">
                <li className="p-3 pl-3 cursor-pointer border-gray-300 border-b flex justify-between hover:bg-gray-100 hover:rounded-t-lg">
                  New here?<p className="text-secondary">Sign Up</p>
                </li>
              </Link>
            )}
            {currentUser ? (
              <Link to="/profile">
                <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                  <FaRegUserCircle /> &nbsp; My Profile
                </li>
              </Link>
            ) : null}

            <Link to="/my-arts">
              <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaShoppingCart /> &nbsp; My Arts
              </li>
            </Link>

            {/* <Link to="/wishlist">
              <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaRegHeart /> &nbsp; Wishlist
              </li>
            </Link> */}

            <Link to="/contact">
              <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaHeadset /> &nbsp; Contact Us
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SignInButton;
