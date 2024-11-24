import footerLogo from "./assets/images/footer-logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import devData from "./data/data";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className=" bg-[#edefee]">
        <div className="container">
          <div className="footer-grid py-24">
            <div>
              <img src={footerLogo} alt="Footer Logo" className="w-44 h-auto" />
            </div>
            <div>
              <h6 className="text-black font-karla font-bold text-2xl mb-5">
                Navigation
              </h6>
              <ul>
                {devData.data.map((el, i) => (
                  <li className="mb-1" key={i}>
                    <Link
                      to={el.navUrl}
                      className="text-black font-karla font-semibold text-lg"
                    >
                      {el.navLink}
                    </Link>
                  </li>
                ))}
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
                    href="mailto:cupporia@mail.com"
                    className="text-black font-karla font-semibold text-lg"
                  >
                    cupporia@mail.com
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
          <div className="py-5 mt-5 border-t-2 border-black">
            <p className="text-black font-karla font-bold text-lg mb-2 text-center">
              © 2024 Cupporia. All Rights Reserved.
            </p>
            <p className="text-black font-karla font-bold text-lg mb-5 text-center">
              Design, Developed, and Maintained by Harshil Khimasia - Web
              Developer
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
