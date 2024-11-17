import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
