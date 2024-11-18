import { Helmet } from "react-helmet";
import Specials from "../components/Specials";
import cardDetail from "./../data/data";

function Menu() {
  return (
    <>
      <Helmet>
        <title>Menu | Cupporia</title>
      </Helmet>
      <main>
        <section>
          <div className="container pt-36 pb-24">
            <div className="flex justify-between items-center mb-14">
              <h2 className="font-markazi text-6xl font-bold">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {cardDetail.cardDetail.map((el, i) => (
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
      </main>
    </>
  );
}

export default Menu;
