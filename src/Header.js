import logo from "./assets/images/logo.png";

function Header() {
  return (
    <header className="container mx-auto px-4 py-4 bg-white">
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <a href="/">
              <img src={logo} alt="Logo" className="w-[258px] h-auto" />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-black font-karla font-semibold text-lg nav-link active"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-black font-karla font-semibold nav-link text-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-black font-karla font-semibold nav-link text-lg"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-black font-karla font-semibold nav-link text-lg"
            >
              Reservations
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-black font-karla font-semibold nav-link text-lg"
            >
              Order Online
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-black font-karla font-semibold nav-link text-lg"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
