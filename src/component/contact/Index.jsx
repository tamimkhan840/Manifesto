import LiveChat from "../../assets/path-to-image40.png";
import Contactimg from "../../assets/path-to-image41.png";

const Contact = () => {
  return (
    <div className="bg-[#fff7e6] px-6 py-12 lg:px-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
        Write to Us to <br />
        <span className="text-red-500">Say Hello or For Information!</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">Contact Information</h3>
          <p className="mb-4">
            <span className="text-red-500 font-bold text-xl">
              +321 4567 456
            </span>{" "}
            <br />
            Toll Free Call
          </p>
          <p className="mb-6">
            Mail Us:{" "}
            <span className="text-red-500 font-bold">hello@wortess.com</span>
          </p>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold transition">
            Start Shopping
          </button>
          <div className="flex items-center mt-6">
            <img
              src={Contactimg}
              alt="Support"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <p className="ml-4 text-sm text-gray-600">
              Contact our friendly support team for any questions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={LiveChat}
            alt="Live Chat"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-gray-600">
            <span className="font-semibold">Live Chat</span> <br />
            Text us now →
          </p>
        </div>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600 transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
