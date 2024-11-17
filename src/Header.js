import logo from "./assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import devData from "./data/data";

function Header() {
  let location = useLocation();

  return (
    <header className="container py-4 bg-white">
      <nav className="nav-grid">
        <ul>
          <li>
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="w-[258px] h-auto" />
            </Link>
          </li>
        </ul>
        <ul className="flex items-center justify-between">
          {devData.data.map((el, i) => (
            <li className="ms-5" key={i}>
              <Link
                to={el.navUrl}
                className={`text-black font-karla font-semibold text-lg nav-link ${
                  location.pathname === el.navUrl ? "active" : ""
                }`}
              >
                {el.navLink}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
