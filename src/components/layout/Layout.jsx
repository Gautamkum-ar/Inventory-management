import { NavLink } from "react-router-dom";

import "../layout/Layout.css";

export const Layout = ({ children }) => {
  const navLinks = [
    {
      id: 1,
      name: "Dashboard",
      route: "/",
    },
    {
      id: 2,
      name: "Departments",
      route: "/departments",
    },
    {
      id: 3,
      name: "Products",
      route: "/products",
    },
  ];

  const ActiveStyle = ({ isActive }) => ({
    background: isActive ? "#9999" : "",
  });
  return (
    <div className="layout">
      <div className="navigations">
        {navLinks.map((nav) => (
          <NavLink style={ActiveStyle} key={nav.id} to={nav.route}>
            {nav.name}
          </NavLink>
        ))}
      </div>
      <div className="main">{children}</div>
    </div>
  );
};
