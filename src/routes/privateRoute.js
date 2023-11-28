import { Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../config/routes";
import { useSelector } from "react-redux";

function PrivateRoute(props) {
  const { isLoggedIn } = useSelector((state) => state.user);
  return isLoggedIn ? <>{props.children}</> : <Navigate to={LOGIN_ROUTE} />;
}

export default PrivateRoute;
