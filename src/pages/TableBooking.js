import { Helmet } from "react-helmet";
import BookingForm from "../components/BookingForm ";
import Specials from "../components/Specials";
import { Link } from "react-router-dom";
import cardDetail from "./../data/data";
import heroImg from "./../assets/images/book-img.jpg";

function TableBooking() {
  return (
    <>
      <Helmet>
        <title>Table Booking | Cupporia</title>
      </Helmet>
      <main>
        <div className="container mx-auto px-4 py-16">
          <section>
            <div className="grid grid-cols-2 gap-8">
              <BookingForm />
              <div>
                <img
                  src={heroImg}
                  alt="Reserve Table"
                  className="m-auto w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="container pt-36 pb-24">
              <div className="flex justify-between items-center mb-14">
                <h2 className="font-markazi text-6xl font-bold">
                  This week specials!
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
        </div>
      </main>
    </>
  );
}

export default TableBooking;
