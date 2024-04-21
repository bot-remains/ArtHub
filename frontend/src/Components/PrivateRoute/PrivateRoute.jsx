import {Outlet, Navigate} from "react-router-dom";
// import { useSelector } from "react-redux";

function PrivateRoute() {
  // const { currentUser } = useSelector(state => state.user);
  const currentUser = null;

  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
