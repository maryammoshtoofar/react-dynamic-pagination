import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE } from "../config/routes";
import Home from "../pages/home";
import Login from "../pages/login";
import Orders from "../pages/orders";
import PrivateRoute from "./privateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={ORDERS_ROUTE}
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
