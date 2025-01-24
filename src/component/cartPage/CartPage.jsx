import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Heresiarch", price: 60, quantity: 1, color: "Optical White", size: "S" },
    { id: 2, name: "Heresiarch", price: 60, quantity: 1, color: "Optical White", size: "S" },
    { id: 3, name: "Heresiarch", price: 60, quantity: 1, color: "Optical White", size: "S" },
    { id: 4, name: "Heresiarch", price: 60, quantity: 1, color: "Optical White", size: "S" },
  ]);

  const [recentlyViewed, setRecentlyViewed] = useState([
    { id: 1, name: "Quaintrelle", description: "A stylish woman who lives in the name of passion and pursues life's pleasures.", price: 60, image: "/path-to-image1.jpg" },
    { id: 2, name: "Quaintrelle", description: "A stylish woman who lives in the name of passion and pursues life's pleasures.", price: 60, image: "/path-to-image2.jpg" },
    { id: 3, name: "Quaintrelle", description: "A stylish woman who lives in the name of passion and pursues life's pleasures.", price: 60, image: "/path-to-image3.jpg" },
    { id: 4, name: "Quaintrelle", description: "A stylish woman who lives in the name of passion and pursues life's pleasures.", price: 60, image: "/path-to-image4.jpg" },
    { id: 5, name: "Quaintrelle", description: "A stylish woman who lives in the name of passion and pursues life's pleasures.", price: 60, image: "/path-to-image5.jpg" },
  ]);

  const sliderSettings = {
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
  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <div className="p-6 lg:p-10 font-sans">
      {/* Cart Section */}
      <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">My Cart</h1>
        <div className="grid lg:grid-cols-4 gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-3">
            {cartItems.map((item) => (
            <div
                key={item.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-lg shadow mb-4 space-y-4 md:space-y-0"
            >
                <div className="flex items-start space-x-4 w-full">
                <img
                    src="/path-to-product-image.jpg"
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-600">Wearability: {item.color}</p>
                    <p className="text-sm text-gray-600">Color: {item.color}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto space-x-4">
                 <p className="text-xlg font-bold">${item.price.toFixed(2)}</p>
                <div className="flex items-center border rounded">
                    <button
                    className="py-1 px-3 text-gray-700"
                    onClick={() => handleQuantityChange(item.id, "decrease")}
                    >
                    -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                    className="py-1 px-3 text-gray-700"
                    onClick={() => handleQuantityChange(item.id, "increase")}
                    >
                    +
                    </button>
                </div>
                <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveItem(item.id)}
                >
                    🗑
                </button>
                </div>
            </div>
            ))}
        </div>

        {/* Cart Totals Section */}
        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} €</span>
            </div>
            <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>0.00 €</span>
            </div>
            <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>0.00 €</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)} € EUR</span>
            </div>
            <button className="w-full bg-red-500 text-white py-3 mt-4 rounded-lg hover:bg-red-600 transition">
              <Link className="block" to={"/checkout"}>PROCEED TO CHECKOUT
              </Link>

            </button>
            <button className="w-full bg-gray-200 text-gray-800 py-3 mt-2 rounded-lg hover:bg-gray-300 transition">
              <Link className="block" to={-1}>BACK TO SHOPPING
              </Link>

            </button>
        </div>
        </div>


      {/* Recently Viewed Section with Slider */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Recently viewed</h2>
      <Slider {...sliderSettings}>
        {recentlyViewed.map((product) => (
          <div key={product.id} className="p-4">
            <div className="bg-white rounded-lg shadow p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-red-500 font-bold mt-2">{product.price.toFixed(2)} €</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CartPage;
