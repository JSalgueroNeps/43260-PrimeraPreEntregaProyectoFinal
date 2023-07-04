import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tienda JP</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to='/categoria/1'>Celulares</NavLink>
          </li>

          <li>
            <NavLink to='/categoria/2'>Notebooks</NavLink>
          </li>
          
          <li>
            <NavLink to='/categoria/3'>Televisores</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;