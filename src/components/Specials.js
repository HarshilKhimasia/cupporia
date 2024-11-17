import { Link } from "react-router-dom";

function Specials({ imgUrl, title, price, description }) {
  return (
    <div className="bg-[#edefee] rounded-2xl overflow-hidden relative">
      <div
        className="card-img h-96"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className="pt-12 pb-24 px-8 mb-7">
        <div>
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-black font-karla text-3xl font-bold">
              {title}
            </h3>
            <p className="text-[#ee9972] font-karla text-3xl font-extrabold">
              {price}
            </p>
          </div>
          <p className="text-black font-karla text-lg font-semibold">
            {description}
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
  );
}

export default Specials;
