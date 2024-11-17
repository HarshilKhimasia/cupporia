import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import { Helmet } from "react-helmet";

function Main() {
  return (
    <>
      <Helmet>
        <title>Little Lemon</title>
      </Helmet>
      <main>
        <Hero />
        <Specials />
      </main>
    </>
  );
}

export default Main;
