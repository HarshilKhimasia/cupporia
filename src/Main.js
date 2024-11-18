import Hero from "./components/Hero";
import Specials from "./components/Specials";
import { Helmet } from "react-helmet";
import Testimonials from "./components/Testimonials";
import { Link } from "react-router-dom";
import cardDetail from "./data/data";

function Main() {
  return (
    <>
      <Helmet>
        <title>Cupporia</title>
      </Helmet>
      <main>
        <Hero />

        <section>
          <div className="container pt-36 pb-24">
            <div className="flex justify-between items-center mb-14">
              <h2 className="font-markazi text-6xl font-bold">
                This week specails!
              </h2>
              <Link to={"/menu"}>
                <div className="reserve-btn">
                  <span className="text-black font-karla text-xl font-bold">
                    Online Menu
                  </span>
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {cardDetail.cardDetail.slice(0, 3).map((el, i) => (
                <Specials
                  imgUrl={el.imgUrl}
                  title={el.title}
                  price={el.price}
                  description={el.description}
                  key={i}
                />
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
    </>
  );
}

export default Main;
