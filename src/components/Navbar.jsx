import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>Router🌎</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/filter">Filter</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
