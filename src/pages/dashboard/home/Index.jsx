

export default function DashboardHome() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here is your website overview.</p>
      </header>

      {/* Statistics Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
          <p className="text-2xl font-bold text-blue-600">150</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Total Sales</h2>
          <p className="text-2xl font-bold text-green-600">$12,000</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
          <p className="text-2xl font-bold text-purple-600">1,230</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Website Traffic</h2>
          <p className="text-2xl font-bold text-red-600">18,500</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Products</h2>
        <div className="bg-white p-4 shadow rounded-lg">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left p-2">Product Name</th>
                <th className="text-left p-2">Category</th>
                <th className="text-right p-2">Price</th>
                <th className="text-right p-2">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Product A</td>
                <td className="p-2">Category 1</td>
                <td className="p-2 text-right">$50</td>
                <td className="p-2 text-right">20</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2">Product B</td>
                <td className="p-2">Category 2</td>
                <td className="p-2 text-right">$30</td>
                <td className="p-2 text-right">15</td>
              </tr>
              <tr>
                <td className="p-2">Product C</td>
                <td className="p-2">Category 3</td>
                <td className="p-2 text-right">$40</td>
                <td className="p-2 text-right">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Website Overview Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Website Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traffic Chart Placeholder */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Traffic Overview</h3>
            <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Traffic chart will go here</p>
            </div>
          </div>
          {/* Recent Orders Placeholder */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Orders</h3>
            <ul className="divide-y divide-gray-200">
              <li className="py-2 flex justify-between">
                <span>Order #12345</span>
                <span className="text-green-600 font-bold">$150</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Order #12346</span>
                <span className="text-green-600 font-bold">$120</span>
              </li>
              <li className="py-2 flex justify-between">
                <span>Order #12347</span>
                <span className="text-green-600 font-bold">$90</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
