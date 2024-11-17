import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import cardDetail from "./data/data";

function Main() {
  return (
    <main>
      <Hero />
      <section>
        <div className="container mx-auto px-4 py-36">
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
            {cardDetail.cardDetail.map((el, i) => (
              <div
                className="bg-[#edefee] rounded-2xl overflow-hidden relative"
                key={i}
              >
                <div
                  className="card-img h-96"
                  style={{ backgroundImage: `url(${el.imgUrl})` }}
                ></div>
                <div className="pt-12 pb-24 px-8 mb-7">
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <h3 className="text-black font-karla text-3xl font-bold">
                        {el.title}
                      </h3>
                      <p className="text-[#ee9972] font-karla text-3xl font-extrabold">
                        {el.price}
                      </p>
                    </div>
                    <p className="text-black font-karla text-lg font-semibold">
                      {el.description}
                    </p>
                  </div>
                </div>
                <Link to={"/order-online"}>
                  <div className="card-btn text-center absolute w-[86%] bottom-10 left-0">
                    <span className="text-black font-karla text-xl font-bold">
                      Order for Delivery
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
