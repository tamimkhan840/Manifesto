import  { useState } from 'react';

const ProductInfo = () => {
  const [activeTab, setActiveTab] = useState('Our Philosophy');

  return (
    <div className="p-6 lg:p-12 font-sans bg-gray-50 text-gray-800">
      {/* Tabs Section */}
      <div className="border-b border-gray-300 flex mb-6 overflow-x-auto">
        {['Our Philosophy', 'Our T-Shirt', 'Washing and Care', 'Shipping'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab ? 'border-b-2 border-black text-black' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'Our Philosophy' && (
          <div>
            <p className="mb-4">
              We only make what is sold. We do not produce large stocks of ready-made t-shirts, but each garment is
              created for the customer who ordered it.
            </p>
            <p>
              We have chosen to follow a more sustainable path, avoiding excess clothing production and collaborating
              with local producers who operate entirely in Italy.
            </p>
          </div>
        )}
        {activeTab === 'Our T-Shirt' && (
          <div>
            <h2 className="text-lg font-medium mb-4">Size Guide</h2>
            <table className="w-full text-sm border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Size</th>
                  <th className="p-2">Shoulders (A)</th>
                  <th className="p-2">Chest (B)</th>
                  <th className="p-2">Length (C)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'S', shoulders: '55.3 cm', chest: '59.5 cm', length: '65.5 cm' },
                  { size: 'M', shoulders: '56.5 cm', chest: '61.5 cm', length: '66.5 cm' },
                  { size: 'L', shoulders: '57.7 cm', chest: '63.5 cm', length: '67.5 cm' },
                ].map((row) => (
                  <tr key={row.size}>
                    <td className="p-2">{row.size}</td>
                    <td className="p-2">{row.shoulders}</td>
                    <td className="p-2">{row.chest}</td>
                    <td className="p-2">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'Washing and Care' && (
          <div>
            <p>Washing and care instructions go here.</p>
          </div>
        )}
        {activeTab === 'Shipping' && (
          <div>
            <p>Shipping details go here.</p>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { icon: '💳', text: 'Secure payments' },
          { icon: '🚚', text: 'Free shipping over 89€' },
          { icon: '👕', text: 'Unique and original design' },
          { icon: '⭐', text: 'Premium quality' },
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-4xl mb-2">{feature.icon}</span>
            <p className="text-sm">{feature.text}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Perchè Scegliere Wortees.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Artigianale',
              text: 'Sono fatta a mano in Italia. Eventuali imperfezioni non sono da considerarsi difetti, ma dimostrazione della lavorazione artigianale.',
            },
            {
              title: 'Eco Friendly',
              text: 'Sono fatta con materiali organici e naturali. Quel poco di plastica che troverai in me è plastica riciclata con processi sostenibili e riciclabile.',
            },
            {
              title: 'Durevole',
              text: 'Sono fatta per durare a lungo, per diventare la tua seconda pelle. Utilizzo solo materiali di primissima qualità. Prenditi cura di me.',
            },
          ].map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md ">
              <h3 className="text-lg font-bold mb-2 text-center">{item.title}</h3>
              <p className="text-base text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
