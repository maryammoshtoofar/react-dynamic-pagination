import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { DASHBOARD_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../../config/routes";

const NavBar = () => {
  return (
    <Nav>
      <Nav.Item className="mx-3">
        <Link to={HOME_ROUTE}>Home</Link>
      </Nav.Item>
      <Nav.Item className="mx-3">
        <Link to={LOGIN_ROUTE}>Login</Link>
      </Nav.Item>
      <Nav.Item className="mx-3">
        <Link to={DASHBOARD_ROUTE}>Dashboard</Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
