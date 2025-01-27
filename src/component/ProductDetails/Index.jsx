import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import ProductSlider from "./ProductSlider";
import { AuthContext } from "../../contex/Index";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("Optical White");
  const [wearability, setWearability] = useState("Regular");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false); // To track if the product is in the cart
  const navigate = useNavigate(); // For redirection
  const { user } = useContext(AuthContext);

  // Fetch product details by ID
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:1000/product/${id}`);
        const data = await response.json();
        setProduct(data);

        // Check if the product is already in the cart
        if (user && user.email) {
          const cartResponse = await fetch(
            `http://localhost:1000/cart?userEmail=${user.email}`
          );
          const cartData = await cartResponse.json();
          const isProductInCart = cartData.some((item) => item.productId === data._id);
          setIsInCart(isProductInCart);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id, user]);

  const handleAddToCart = async (product) => {
    if (!user || !user.email) {
      alert("User is not logged in or email is missing.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:1000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          userEmail: user.email,
          price: product.price,
          quantity: quantity,
          photo: product.photo,
          name: product.name,
        }),
      });

      if (response.ok) {
        alert("Item added to cart!");
        setIsInCart(true); // Set the product as added to the cart
        navigate("/cartPage");
      } else {
        alert("Failed to add item to cart.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Error adding item to cart.");
    }
  };

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) => {
      if (type === "increase") return prevQuantity + 1;
      if (type === "decrease" && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  if (!product) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Loading product details...</h2>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex flex-col space-y-4">
          <div className="w-full flex justify-center">
            <img
              src={product.photo}
              alt={product.name}
              className="w-64 h-64 md:w-96 md:h-96 rounded-lg border object-contain"
            />
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-red-500 font-medium mb-4">{product.taste}</p>
          <p className="text-gray-700 mb-6">{product.details}</p>
          <div className="flex items-center space-x-4 mb-6">
            <p className="text-xl font-bold">{product.price} €</p>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <span className="text-gray-600">Wearability:</span>
            <button
              className={`py-1 px-3 rounded border ${
                wearability === "Oversize" ? "bg-gray-800 text-white" : "bg-white"
              }`}
              onClick={() => setWearability("Oversize")}
            >
              Oversize
            </button>
            <button
              className={`py-1 px-3 rounded border ${
                wearability === "Regular" ? "bg-gray-800 text-white" : "bg-white"
              }`}
              onClick={() => setWearability("Regular")}
            >
              Regular
            </button>
          </div>

          <div className="mb-6">
            <span className="text-gray-600">Size:</span>
            <div className="flex space-x-2 mt-2">
              {["XS", "S", "M", "L", "XL"].map((sizeOption) => (
                <button
                  key={sizeOption}
                  className={`py-1 px-3 rounded border ${
                    size === sizeOption ? "bg-gray-800 text-white" : "bg-white"
                  }`}
                  onClick={() => setSize(sizeOption)}
                >
                  {sizeOption}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-items-center gap-5 mb-6">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gray-600">Quantity:</span>
              <button
                className="py-1 px-3 rounded border bg-white"
                onClick={() => handleQuantityChange("decrease")}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="py-1 px-3 rounded border bg-white"
                onClick={() => handleQuantityChange("increase")}
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className={`w-[calc(100%-22rem)] py-3 rounded-lg font-medium ${
                isInCart ? "bg-gray-400 text-white cursor-not-allowed" : "bg-red-500 text-white"
              }`}
              disabled={isInCart} // Disable button if already in cart
            >
              {isInCart ? "Already in Cart" : "ADD TO CART"}
            </button>
            <button
              className={`w-12 h-12 flex items-center justify-center border rounded-lg ${
                isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-500"
              }`}
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label="Toggle Favorite"
            >
              ♥
            </button>
          </div>

          <p className="text-sm text-gray-600">
            All our T-shirts are <strong>&quot;made to order&quot;</strong>. It
            takes about 14 days to make your T-shirt; buying it now means you
            can receive it by <strong>30/11/2024</strong>.
          </p>
        </div>
      </div>
      <div>
        <ProductInfo />
      </div>
      <div>
        <ProductSlider />
      </div>
    </div>
  );
};

export default ProductDetails;
