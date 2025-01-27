import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contex/Index";

const CartPage = () => {
  const { user, cartItems ,setCartItems } = useContext(AuthContext); // Logged-in user info
  // const [cartItems, setCartItems] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  console.log(cartItems);
  

  // Fetch cart items for the logged-in user
  useEffect(() => {
    if (!user || !user.email) return;

    fetch(`http://localhost:1000/cart?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Failed to fetch cart items:", err));

    fetch("http://localhost:1000/product") // Recently viewed products
      .then((res) => res.json())
      .then((data) => setRecentlyViewed(data))
      .catch((err) =>
        console.error("Failed to fetch recently viewed products:", err)
      );
  }, [setCartItems, user]);

  // Handle quantity change
  const handleQuantityChange = (id, type) => {
    const item = cartItems.find((item) => item._id === id);
    if (!item) return;

    const newQuantity =
      type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1);

    fetch(`http://localhost:1000/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((res) => res.json())
      .then(() => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item._id === id ? { ...item, quantity: newQuantity } : item
          )
        );
      })
      .catch((err) => console.error("Failed to update quantity:", err));
  };

  // Handle remove item
  const handleRemoveItem = (id) => {
    fetch(`http://localhost:1000/cart/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
      })
      .catch((err) => console.error("Failed to remove item:", err));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="p-6 lg:p-10 font-sans">
      {/* Cart Section */}
      <h1 className="text-3xl font-bold mb-6 text-center lg:text-left">My Cart</h1>
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-3">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white rounded-lg shadow mb-4 space-y-4 md:space-y-0"
              >
                <div className="flex items-start space-x-4 w-full">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-sm text-gray-600">Category: {item.category}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full md:w-auto space-x-4">
                  <p className="text-xl font-bold">${item.price}</p>
                  <div className="flex items-center border rounded">
                    <button
                      className="py-1 px-3 text-gray-700"
                      onClick={() => handleQuantityChange(item._id, "decrease")}
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      className="py-1 px-3 text-gray-700"
                      onClick={() => handleQuantityChange(item._id, "increase")}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Totals Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}{" "}
              €
            </span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}{" "}
              €
            </span>
          </div>
          <button className="w-full bg-red-500 text-white py-3 mt-4 rounded-lg hover:bg-red-600 transition">
            <Link className="block" to={"/checkout"}>
              PROCEED TO CHECKOUT
            </Link>
          </button>
          <button className="w-full bg-gray-200 text-gray-800 py-3 mt-2 rounded-lg hover:bg-gray-300 transition">
            <Link className="block" to={-1}>
              BACK TO SHOPPING
            </Link>
          </button>
        </div>
      </div>

      {/* Recently Viewed Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Recently Viewed</h2>
      <Slider {...sliderSettings}>
        {recentlyViewed.map((product) => (
          <div key={product._id} className="p-4">
            <div className="bg-white rounded-lg shadow p-4">
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.details}</p>
              <p className="text-red-500 font-bold mt-2">{product.price} €</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CartPage;
