import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section relative">
      <div className="container py-56 hero-grid">
        <div>
          <h1 className="font-markazi text-7xl font-bold text-primary tracking-wider leading-10 mb-3">
            Cupporia
            <br />
            <span className="font-markazi text-6xl font-bold text-white tracking-wider">
              Where Coffee Meets Craft
            </span>
          </h1>
          <p className="font-karla text-2xl font-bold text-white tracking-wider w-9/12">
            We are a specialty coffee shop, dedicated to serving expertly brewed
            coffee made from the finest beans, with a focus on quality and
            tradition.
          </p>
          <Link to={"/reservations"}>
            <div className="reserve-btn mt-7">
              <span className="text-black font-karla text-xl font-bold">
                Reserve a Table
              </span>
            </div>
          </Link>
        </div>

        <div className="absolute h-[44rem] w-[34rem] bottom-[-70px] right-64 hero-img-block"></div>
      </div>
    </section>
  );
}

export default Hero;
