import { NavLink } from "react-router-dom";

const AppNavigation = () => {
  return (
    <nav className=" mb-10">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNavigation;
