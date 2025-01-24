

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Section */}
      <div className="bg-black text-white text-center py-10">
        <h2 className="text-3xl font-bold mb-4">La Nostra Promessa</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          Creiamo capi che parlano di te. Ogni capo è un manifesto etico e
          sostenibile, pensato per celebrare il linguaggio, rispettare il
          pianeta e durare nel tempo. Perché vestirsi è esprimere chi sei, senza
          compromessi.
        </p>
        <button className="mt-6 bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-700 transition">
          LEGGY DI PIÙ →
        </button>
      </div>

      {/* Middle Section */}
      <div className="text-center py-10 px-4">
        <blockquote className="text-lg italic text-gray-500 mb-4 max-w-2xl mx-auto">
        <span className="text-5xl">‘‘</span>  &quot;Non conosco nulla al mondo che abbia tanto potere quanto la parola. A volte ne scrivo una, e la guardo, fino a quando non comincia a splendere&quot; ‍<span className="text-5xl">’’</span>
        </blockquote>
        <cite className="text-gray-800 font-medium">Emily Dickinson</cite>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-10 px-4">
        <div className="text-center mb-8">

          <div className="text-4xl font-pacifico font-bold mb-2 flex justify-center my-2">
           <a href="#">wortees</a><p className="text-lg">®</p>
         </div>
          <p className="text-gray-600">
            Since 2018 proudly made with ❤️ in Italy
          </p>
        </div>

        {/* Newsletter */}
        <div className="flex justify-center items-center mb-8">
          <input
            type="email"
            placeholder="Your email address"
            className="border border-gray-300 rounded-l-full py-2 px-4 w-80 focus:outline-none focus:ring focus:ring-red-200"
          />
          <button className="bg-red-600 text-white text-[8px] md:text-base py-2 px-3 md:px-6 rounded-r-full hover:bg-red-700 transition">
            SUBSCRIBE →
          </button>
        </div>

        {/* Links */}
        <div className="bg-gray-100 py-8">
  <div className="container mx-auto px-6">
    {/* Top Border */}
    <div className="border-t border-gray-300 mb-10"></div>

    {/* Footer Content */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-6 text-gray-500 text-sm mb-6">
      {/* Social Links */}
        <div className="lg:col-span-2 flex justify-between">
            <a href="#" className="flex justify-center items-center hover:text-red-600">
            <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="flex justify-center items-center hover:text-red-600">
            <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="flex justify-center items-center hover:text-red-600">
            <i className="fab fa-youtube text-xl"></i>
            </a>
        </div>

      {/* Links Section */}
        <div className="lg:col-span-5 flex flex-wrap-reverse gap-4 justify-center sm:justify-center lg:justify-center">
            <a href="#" className="text-center hover:text-gray-800">
            Terms & Conditions
            </a>
            <a href="#" className="text-center hover:text-gray-800">
            Privacy Policy
            </a>
            <a href="#" className="text-center hover:text-gray-800">
            Cookie Policy
            </a>
            <a href="#" className="text-center hover:text-gray-800">
            Shipping and Returns
            </a>
        </div>

      {/* Payment Logos */}
        <div className="lg:col-span-5 flex flex-wrap gap-4 justify-between sm:justify-center lg:justify-end">
            <div className="flex justify-center items-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/62/Stripe_Logo%2C_revised_2016.svg"
                alt="Stripe"
                className="h-6"
            />
            </div>
            <div className="flex justify-center items-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-6"
            />
            </div>
            <div className="flex justify-center items-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg"
                alt="American Express"
                className="h-6"
            />
            </div>
            <div className="flex justify-center items-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="MasterCard"
                className="h-6"
            />
            </div>
            <div className="flex justify-center items-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
                className="h-6"
            />
            </div>
            <div className="flex justify-center items-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/59/Discover_Card_logo.svg"
                alt="Discover"
                className="h-6"
            />
            </div>
        </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
      <p>© 2025 Tamim Khan. All rights reserved.</p>
    </div>
  </div>
</div>






        {/* Footer Bottom */}

      </div>



    </footer>
  );
};

export default Footer;
