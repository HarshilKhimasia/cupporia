import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import data from "./../data/data";
import { FaRegStar, FaStar } from "react-icons/fa";

function Testimonials() {
  const { testimonailsData } = data;
  const starsArr = [
    [
      <FaStar fontSize={30} color="#ffcf40" />,
      <FaRegStar fontSize={30} color="#ffcf40" />,
    ],
    [
      <FaStar fontSize={30} color="#ffcf40" />,
      <FaRegStar fontSize={30} color="#ffcf40" />,
    ],
    [
      <FaStar fontSize={30} color="#ffcf40" />,
      <FaRegStar fontSize={30} color="#ffcf40" />,
    ],
    [
      <FaStar fontSize={30} color="#ffcf40" />,
      <FaRegStar fontSize={30} color="#ffcf40" />,
    ],
    [
      <FaStar fontSize={30} color="#ffcf40" />,
      <FaRegStar fontSize={30} color="#ffcf40" />,
    ],
  ];
  return (
    <section className="testimonials-section">
    <div className="container py-24">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: 44,
          focus: "center",
          arrows: false,
          snap: true,
          autoplay: true,
          resetProgress: false,
        }}
      >
        {testimonailsData.map((el, i) => (
          <SplideSlide key={i}>
            <div className="relative mt-24 pt-24 pb-12 bg-white rounded-xl px-11">
              <div
                className="cirlceProfile"
                style={{ backgroundImage: `url(${el.imgUrl})` }}
              ></div>
              <blockquote className="font-karla italic text-xl font-medium text-center mb-3">
                {el.review}
              </blockquote>
              <p className="font-markazi text-3xl font-bold text-center">
                - {el.name}
              </p>
              <ul className="flex items-center justify-center mt-5">
                {starsArr.map((stars, index) => (
                  <li key={index}>
                    {index + 1 > el.rating ? stars[1] : stars[0]}
                  </li>
                ))}
              </ul>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
    </section>
  );
}

export default Testimonials;
