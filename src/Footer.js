import footerLogo from "./assets/images/footer-logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className=" bg-[#edefee]">
        <div className="container mx-auto px-4 py-16 footer-grid">
          <div>
            <img src={footerLogo} alt="Footer Logo" className="w-44 h-auto" />
          </div>
          <div>
            <h6 className="text-black font-karla font-bold text-2xl mb-5">
              Navigation
            </h6>
            <ul>
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  About
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  Menu
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  Reservations
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  Order Online
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-black font-karla font-bold text-2xl mb-5">
              Contact
            </h6>
            <ul>
              <li className="mb-1">
                <address className="not-italic">
                  <p className="text-black font-karla font-bold text-lg">
                    Address:
                  </p>
                  <a
                    href="/"
                    className="text-black font-karla font-semibold text-lg"
                  >
                    2800 Flagler St Miami FL, 00000
                  </a>
                </address>
              </li>
              <li className="mb-1">
                <p className="text-black font-karla font-bold text-lg">
                  Phone:
                </p>
                <a
                  href="tel:+1 800 545 0000"
                  className="text-black font-karla font-semibold text-lg"
                >
                  1 800 545 0000
                </a>
              </li>
              <li className="mb-1">
                <p className="text-black font-karla font-bold text-lg">
                  Email:
                </p>
                <a
                  href="mailto:littlelemon@mail.com"
                  className="text-black font-karla font-semibold text-lg"
                >
                  littlelemon@mail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-black font-karla font-bold text-2xl mb-5">
              Social Media
            </h6>
            <ul className="flex">
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  <FaFacebook fontSize={25} className="me-5" />
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  <FaInstagram fontSize={25} className="me-5" />
                </a>
              </li>
              <li className="mb-1">
                <a
                  href="/"
                  className="text-black font-karla font-semibold text-lg"
                >
                  <FaYoutube fontSize={25} className="me-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
