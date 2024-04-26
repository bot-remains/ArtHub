import {Outlet, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

function PrivateRoute() {
  const {user} = useSelector((state) => state.user);
  // const user = null;

  return user ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
