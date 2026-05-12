import { NavLink } from "react-router-dom";
import logo from "../assets/fivezeroslogo1.png";

const Navbar = () => {

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400"
      : "text-white";

  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white/5 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50 ">

        <ul>
          <img className="h-20 w-30" src={logo} alt={'logo'}/>
          <h1>FiveZeros Limited</h1>
        </ul>

      <ul className="flex gap-8">

  <li>
    <NavLink to="/" className={navLinkClass}>
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/tenders" className={navLinkClass}>
      Tenders
    </NavLink>
  </li>

  <li>
    <NavLink to="/downloads" className={navLinkClass}>
      Downloads
    </NavLink>
  </li>

  <li>
    <NavLink to="/projects" className={navLinkClass}>
      Projects
    </NavLink>
  </li>

  <li>
    <NavLink to="/contact" className={navLinkClass}>
      Contact
    </NavLink>
  </li>

</ul>

    </nav>
  );
};

export default Navbar;