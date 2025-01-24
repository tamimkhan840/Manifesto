
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    title: "Pyt",
    description: "It doesn’t matter, shake it off, these things happen.",
    price: "60,00 €",
    image: "/path/to/tshirt1.png",
    tag: "Oversize",
  },
  {
    id: 2,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: "/path/to/tshirt2.png",
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Oenophilia",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: "/path/to/tshirt3.png",
    tag: "Oversize",
  },
  {
    id: 4,
    title: "Morkkis",
    description: "Emotional or psychological hangover; fear of misbehaved while drunk.",
    price: "60,00 €",
    image: "/path/to/tshirt4.png",
    tag: "Oversize",
  },
];

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-8">And Have You Already Seen These?</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-red-500">{product.price}</span>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
          VEDI TUTTE
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
