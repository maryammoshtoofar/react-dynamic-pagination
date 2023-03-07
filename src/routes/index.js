import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DASHBOARD_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../config/routes";
import SharedLayout from "../layout";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AllRoutes;
