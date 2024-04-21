import axios from "axios";
import {FaSignOutAlt} from "react-icons/fa";
// import {signOut} from "../../redux/user/userSlice";

function SignOut() {
  const currentUser = null;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const dispatch = useDispatch();

  const handleSignOut = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/user/signout", currentUser, {
        withCredentials: true,
      })
      .then((response) => {
        // dispatch(signOut());
      })
      .catch((error) => {
        if (error.response) {
          dispatch(setApiError(error.response.data));
        } else {
          dispatch(setApiError(error.response));
        }
      });
  };

  return currentUser ? (
    <li
      className="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
      onClick={handleSignOut}
    >
      <FaSignOutAlt /> &nbsp; Sign Out
    </li>
  ) : null;
}

export default SignOut;
