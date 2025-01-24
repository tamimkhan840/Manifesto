
import image2 from "../../assets/path-to-image2.png";
import image3 from "../../assets/path-to-image3.png";
import image4 from "../../assets/path-to-image4.png";
import image5 from "../../assets/path-to-image5.png";
import image30 from "../../assets/path-to-image30.png";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-cream-100 to-cream-200 py-12 px-6 md:px-20">
      <div className="text-center max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-10">
            <h1 className="text-xl font-semibold uppercase text-gray-600 tracking-wider">
              It’s Not Just a T-Shirt
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-snug mt-4">
              It’s a Manifesto to be Worn!
            </h2>
            <p className="text-lg text-gray-600 mt-6">
              Wortees è una dichiarazione da indossare, è inchiostro; è un atto di
              responsabilità verbale; è polisemia indelebile del carattere che abbiamo
              impresso e che ci portiamo addosso.
            </p>
            <button className="mt-8 px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-md hover:bg-red-700 transition duration-300">
              Leggi di più
            </button>
        </div>
        <div className="col-span-2 opacity-65 mx-auto lg:ml-auto object-cover bg-no-repeat"
       
          >
            <img className="my-7" src={image30} alt="i" />
        </div>
      </div>

      {/* Responsive Image Layout */}
      <div className="h-44 md:h-96 relative mt-12 grid grid-cols-3 lg:grid-cols-6 gap-4">
        <img className="px-3  rounded-lg bg-[#13A5] shadow-lg w-[120px] lg:w-[200px] md:w-[150px] absolute z-50 right-0 -top-[100px] sm:-top-[120px] lg:-top-[170px] "
            src={image2}
            alt="" />

        <img
            className="px-3  rounded-lg shadow-lg absolute z-50 w-[70px] sm:w-[100px] lg:w-[200px] md:w-[150px] right-0  top-14  lg:top-[210px] bg-[#13A5EE]"
            src={image2}
            alt="" />

        <img
            className="px-3  hidden lg:block rounded-lg lg:w-[200px] shadow-lg absolute z-50  left-64 top-[21px] bg-[#31B7AC]"
            src={image2}
            alt="" />



        <img
            className="px-3  rounded-lg md:w-[150px] shadow-lg w-[86px] lg:w-[200px] absolute z-50  left-0 -top-[100px] lg:-top-[170px] bg-[#e6a350]"
            src={image2}
            alt="" />

        <img
            className="px-3  rounded-lg  shadow-lg absolute w-[70px] md:w-[150px] lg:w-[200px] z-50 left-0 top-10 lg:top-[210px] bg-[#13A5EE]"
            src={image3}
            alt="" />


        <img
            className="px-3 hidden lg:block rounded-lg w-[200px] lg:w-[200px] shadow-lg absolute z-50   left-[65%] top-[21px] bg-[#E7D1AB]"
            src={image4}
            alt="" />


        <img
            className="hidden md:block px-3 rounded-lg md:w-[150px] lg:w-[200px] w-[100px]  shadow-lg absolute z-50 left-[35%]   lg:left-[43%] top-24 lg:top-[95px] bg-[#E7D1AB]"
            src={image2}
            alt="" />
        <img
            className="md:hidden px-3 rounded-lg md:w-[150px] lg:w-[200px] w-[100px] h-28 shadow-lg absolute z-50 left-[30%] sm:left-[34px] md:left-[43px]  top-0 lg:top-[95px] bg-[#E7D1AB]"
            src={image5}
            alt="" />

      </div>
    </div>
  );
};

export default HeroSection;
