import Hero from "./components/Hero";
import Specials from "./components/Specials";
import { Helmet } from "react-helmet";
import Testimonials from "./components/Testimonials";

function Main() {
  return (
    <>
      <Helmet>
        <title>Little Lemon</title>
      </Helmet>
      <main>
        <Hero />
        <Specials />
        <section className="testimonials-section">
          <Testimonials />
        </section>
      </main>
    </>
  );
}

export default Main;
