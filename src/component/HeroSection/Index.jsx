
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/path-to-image2.png";
// import image1 from "../../assets/path-to-image2.png";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      image: image1,
      title: "Slide 1: Innovation at its Best",
      altText: "A person using innovative technology",
  },
  {
      image: image1,
      title: "Slide 2: Designed for You",
      altText: "A product designed for user comfort",
  },
  {
      image: image1,
      title: "Slide 3: Experience Excellence",
      altText: "Experiencing excellent service",
  },
  ];

  return (
    <div className="bg-gradient-to-b from-[#FAF4E1] via-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          It’s a Manifesto
          to be Worn!
          </h1>
          <p className="text-lg text-gray-600">
            Explore the best features with a sleek and modern design.
          </p>
        </motion.div>

        {/* Slider Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="shadow-xl rounded-xl overflow-hidden"
        >
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="h-96 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className=" object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div>
                  <h2 className="text-3xl md:text-5xl font-semibold text-white text-center px-4">
                    {slide.title}
                  </h2>
                  <br />
                  <h2 className="text-3xl md:text-5xl font-semibold text-white text-center px-4">
                    {slide.altText}
                  </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-600 transition duration-300">
            Get Started
          </button>
          <button className="ml-4 px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-orange-600 transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
