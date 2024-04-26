import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {MdOutlineCreate} from "react-icons/md";
import {
  FaRegUserCircle,
  FaHeadset,
  FaRegHeart,
  FaAngleUp,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import {IoLogOutOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import axios from "axios";
import {setUser} from "../redux/user/userSlice";

function SignInButton() {
  const dispatch = useDispatch();

  const {user, apiError} = useSelector((state) => state.user);

  const [showMenu, setShowMenu] = useState(false);
  let timeoutId;

  useEffect(() => {
    console.log(user);
  });

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowMenu(false);
    }, 100);
  };

  const logout = () => {
    axios
      .get("http://localhost:3000/api/v1/auth/logout", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(setUser(null));
        console.log(response);
      });
  };

  return (
    <div className="relative">
      <Link
        to="/profile"
        className={`${
          showMenu ? " text-white" : "text-white"
        } flex p-2 ml-6 justify-evenly items-center`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {user ? (
          <p className="bg-[red] w-8 h-8 flex justify-center items-center rounded-full text-white">
            {user[0]}
          </p>
        ) : (
          <>
            <FaRegUserCircle /> &nbsp; Sign In
          </>
        )}
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
          className="absolute top-[50px]  left-[-120%] bg-white shadow  w-[250px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="list-none p-0 m-0">
            {user ? null : (
              <Link to="/signup">
                <li className="p-3 pl-3 cursor-pointer border-gray-300 border-b flex justify-between hover:bg-gray-100 ">
                  New here?<p className="text-secondary">Sign Up</p>
                </li>
              </Link>
            )}
            {user ? (
              <>
                <Link to="upload-new-art">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                    <MdOutlineCreate /> &nbsp;Create Post
                  </li>
                </Link>
                <Link to="/profile">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                    <FaRegUserCircle /> &nbsp; My Profile
                  </li>
                </Link>
              </>
            ) : null}

            {/* <Link to="/contact">
              <li className="p-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FaHeadset /> &nbsp; Contact Us
              </li>
            </Link> */}
            {user ? (
              <button
                className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => {
                  logout();
                }}
              >
                <IoLogOutOutline />
                &nbsp;Logout
              </button>
            ) : (
              ""
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SignInButton;
