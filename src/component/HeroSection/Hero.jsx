import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(58, 123, 213, 0.8), rgba(0, 0, 0, 0.7))",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Your Next Adventure
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-2xl mx-auto mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Explore the world of endless possibilities with our unique products and
          solutions tailored just for you.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Image Slider */}
      <div className="absolute bottom-0 w-full">
        <Slider {...sliderSettings}>
          <div className="h-[300px] md:h-[500px] flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <h3 className="text-3xl font-bold text-white">Slide 1: Amazing Views</h3>
          </div>
          <div className="h-[300px] md:h-[500px] flex items-center justify-center bg-gradient-to-r from-green-500 via-teal-500 to-blue-500">
            <h3 className="text-3xl font-bold text-white">Slide 2: Discover the Unknown</h3>
          </div>
          <div className="h-[300px] md:h-[500px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
            <h3 className="text-3xl font-bold text-white">Slide 3: Start Your Journey</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
