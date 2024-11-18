import { Helmet } from "react-helmet";
import Testimonials from "../components/Testimonials";
function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Cupporia</title>
      </Helmet>
      <main>
        <section>
          <div className="container mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-14">
              <h2 className="font-markazi text-6xl font-bold">About Us</h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-karla text-4xl font-bold mb-3">
                  Our Story
                </h2>
                <p className="text-black font-karla text-xl font-medium">
                  Cupporia began with a passion for creating memorable coffee
                  experiences. From sourcing the finest beans to crafting every
                  cup with care, we’ve built a space where coffee lovers can
                  unwind, connect, and indulge in their favorite brews. Our
                  journey is driven by the joy of bringing people together over
                  exceptional coffee and delicious treats.
                </p>
              </div>
              <div>
                <div className="w-11/12 h-[400px] ms-auto rounded-xl overflow-hidden">
                  <img
                    src="/assets/images/cafe1.jpg"
                    alt="cafeOne"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="w-11/12 h-[400px] me-auto rounded-xl overflow-hidden">
                  <img
                    src="/assets/images/cafe2.jpg"
                    alt="cafeOne"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-karla text-4xl font-bold mb-3">
                  What We Stand For
                </h2>
                <p className="text-black font-karla text-xl font-medium">
                  At Cupporia, we believe in more than just coffee — we believe
                  in community. Every cup we serve reflects our commitment to
                  quality, sustainability, and warm hospitality. Whether you're
                  here for a quick caffeine fix or a leisurely break, our goal
                  is to make every visit feel special and every sip
                  unforgettable.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-karla text-4xl font-bold mb-3">
                  Crafted with Passion
                </h2>
                <p className="text-black font-karla text-xl font-medium">
                  Every cup at Cupporia tells a story of dedication and love for
                  the art of coffee. From carefully selected beans to the expert
                  hands that brew them, we ensure that every sip delivers a
                  perfect blend of flavor and warmth. Our passion fuels our
                  mission to bring you the best coffee experience possible.
                </p>
              </div>
              <div>
                <div className="w-11/12 h-[400px] ms-auto rounded-xl overflow-hidden">
                  <img
                    src="/assets/images/cafe3.jpg"
                    alt="cafeOne"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="w-11/12 h-[400px] me-auto rounded-xl overflow-hidden">
                  <img
                    src="/assets/images/cafe4.jpg"
                    alt="cafeOne"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-primary font-karla text-4xl font-bold mb-3">
                  A Place to Belong
                </h2>
                <p className="text-black font-karla text-xl font-medium">
                  Cupporia is more than a coffee shop — it’s a place where
                  friends meet, ideas spark, and moments turn into memories.
                  Designed to be your cozy corner away from the hustle of life,
                  we’re here to make sure you feel at home while savoring the
                  finest brews and treats.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
      </main>
    </>
  );
}

export default About;
