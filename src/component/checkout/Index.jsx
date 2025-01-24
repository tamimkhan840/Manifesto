

const Checkout = () => {
  return (
    <div className="bg-[#fff7e6] px-4 py-8 lg:px-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Billing Details */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4">
            {/* Document Type */}
            <div>
              <label className="block text-sm font-medium mb-2">Document Type</label>
              <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Choose the type of document</option>
                <option>ID Card</option>
                <option>Passport</option>
                <option>Driving License</option>
              </select>
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Company Name"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium mb-2">Country/Region</label>
              <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Bangladesh</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            {/* Address Fields */}
            <div>
              <label className="block text-sm font-medium mb-2">Street and Number</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Street/Square and House Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Apartment, suite, unit, etc. (Optional)
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Apartment details"
              />
            </div>

            {/* City and District */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">District</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="District"
                />
              </div>
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm font-medium mb-2">Zip Code (Optional)</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Zip Code"
              />
            </div>

            {/* Phone and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Email Address"
                />
              </div>
            </div>

            {/* Order Notes */}
            <div>
              <label className="block text-sm font-medium mb-2">Order Notes (Optional)</label>
              <textarea
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="4"
                placeholder="Order Notes"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Cart Totals */}
       <div>
              {/* Promo Code */}
         <div className="mb-6">
                <button className="text-red-500 font-medium hover:underline flex items-center">
                <span className="mr-2">I have a promo code</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Cart Totals</h2>
            <div className="space-y-4 mb-6">
                {/* Subtotal, Shipping, Tax */}
                <div className="flex justify-between items-center text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">240.00 €</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                <span>Shipping</span>
                <span className="font-medium">0.00 €</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                <span>Tax</span>
                <span className="font-medium">0.00 €</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>240.00 €</span>
                </div>
            </div>



            {/* Payment Method */}
            <div className="mb-6">
                <h3 className="text-sm font-medium mb-2 text-gray-700">Select Payment Method</h3>
                <div className="space-y-3">
                <button className="w-full border rounded-md p-3 flex items-center justify-between hover:shadow-lg transition">
                    <span>Credit/Debit Card</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                <button className="w-full border rounded-md p-3 flex items-center justify-between hover:shadow-lg transition">
                    <span>PayPal</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                </div>
            </div>

            {/* Card Information */}
            <div className="space-y-4 mb-6">
                <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500"
                />
                <input
                type="text"
                placeholder="Card Number"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500"
                />
                <div className="grid grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="MM / YY"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500"
                />
                <input
                    type="text"
                    placeholder="CVV"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500"
                />
                </div>
            </div>

            {/* Terms & Conditions */}
            <div className="space-y-4">
                <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox rounded" />
                <span className="ml-2 text-sm text-gray-600">
                    I have read and agree to the website&apos;s terms and conditions *
                </span>
                </label>
                <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox rounded" />
                <span className="ml-2 text-sm text-gray-600">
                    Subscribe to the newsletter to receive exclusive updates and promotions!
                </span>
                </label>
            </div>

            {/* Place Order */}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-semibold mt-6">
                PLACE ORDER
            </button>
            </div>
       </div>


      </div>
    </div>
  );
};

export default Checkout;
