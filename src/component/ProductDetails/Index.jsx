import { useState } from 'react';
import image3 from "../../assets/path-to-image11.png";
import ProductInfo from './ProductInfo';
import ProductSlider from './ProductSlider';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('Optical White');
  const [wearability, setWearability] = useState('Regular');
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) => {
      if (type === 'increase') return prevQuantity + 1;
      if (type === 'decrease' && prevQuantity > 1) return prevQuantity - 1;
      return prevQuantity;
    });
  };

  return (
    <div className="p-4 lg:p-10 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
       {/* Image Section */}
       <div className="flex flex-col space-y-4">
          <div className="w-full flex justify-center">
            <img
              src={image3}
              alt="Oniochalasia T-shirt"
              className="w-64 h-64 md:w-96 md:h-96 rounded-lg border object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <img
              src={image3}
              alt="T-shirt view 1"
              className="w-full h-24 md:h-36 rounded-lg border object-cover"
            />
            <img
              src={image3}
              alt="T-shirt view 2"
              className="w-full h-24 md:h-36 rounded-lg border object-cover"
            />
            <img
              src={image3}
              alt="T-shirt view 3"
              className="w-full h-24 md:h-36 rounded-lg border object-cover"
            />
            <img
              src={image3}
              alt="T-shirt view 4"
              className="w-full h-24 md:h-36 rounded-lg border object-cover"
            />
          </div>
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Oniochalasia</h1>
          <p className="text-red-500 font-medium mb-4">
            Practicing shopping as a form of mental relaxation; buying for stress relief.
          </p>

          <p className="text-gray-700 mb-6">
            This is our Dictionary collection. The clean and modern design fits perfectly with any occasion, making them ideal for those looking to express their personality with style and character.
          </p>

          <div className="flex items-center space-x-4 mb-6">
            <p className="text-xl font-bold">60,00 €</p>
            <p className="text-gray-500 line-through">70,00 €</p>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <span className="text-gray-600">Wearability:</span>
            <button
              className={`py-1 px-3 rounded border ${
                wearability === 'Oversize' ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
              onClick={() => setWearability('Oversize')}
            >
              Oversize
            </button>
            <button
              className={`py-1 px-3 rounded border ${
                wearability === 'Regular' ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
              onClick={() => setWearability('Regular')}
            >
              Regular
            </button>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <span className="text-gray-600">Color:</span>
            <button
              className={`py-1 px-3 rounded border ${
                color === 'Optical White' ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
              onClick={() => setColor('Optical White')}
            >
              Optical White
            </button>
            <button
              className={`py-1 px-3 rounded border ${
                color === 'Ecru' ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
              onClick={() => setColor('Ecru')}
            >
              Ecru
            </button>
          </div>

          <div className="mb-6">
            <span className="text-gray-600">Size:</span>
            <div className="flex space-x-2 mt-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((sizeOption) => (
                <button
                  key={sizeOption}
                  className={`py-1 px-3 rounded border ${
                    size === sizeOption ? 'bg-gray-800 text-white' : 'bg-white'
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
              onClick={() => handleQuantityChange('decrease')}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="py-1 px-3 rounded border bg-white"
              onClick={() => handleQuantityChange('increase')}
            >
              +
            </button>
          </div>

            <button className="w-[calc(100%-22rem)] py-3 bg-red-500 text-white rounded-lg font-medium">
              ADD TO CART
            </button>
            <button
              className={`w-12 h-12 flex items-center justify-center border rounded-lg ${
                isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-500'
              }`}
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label="Toggle Favorite"
            >
              ♥
            </button>
          </div>

          <p className="text-sm text-gray-600">
            All our T-shirts are <strong>&quot;made to order&quot;</strong>. It takes about 14 days to make your T-shirt; buying it now means you can receive it by <strong>30/11/2024</strong>.
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
