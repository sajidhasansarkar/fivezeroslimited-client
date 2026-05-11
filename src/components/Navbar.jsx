import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400"
      : "text-white";

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white/5 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">

      <h1 className="text-2xl font-bold">
        00000
      </h1>

      <ul className="flex gap-8">

        <NavLink
          to="/"
          className={navLinkClass}
        >
          Home
        </NavLink>

        <NavLink
          to="/tenders"
          className={navLinkClass}
        >
          Tenders
        </NavLink>

        <NavLink
          to="/downloads"
          className={navLinkClass}
        >
          Downloads
        </NavLink>

        <NavLink
          to="/projects"
          className={navLinkClass}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={navLinkClass}
        >
          Contact
        </NavLink>

      </ul>

    </nav>
  );
};

export default Navbar;