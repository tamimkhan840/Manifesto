const FactsSection = () => {
    const facts = [
      {
        id: 1,
        title: "Artigianale",
        description:
          "Sono fatta a mano in Italia. Eventuali imperfezioni non sono da considerarsi difetti, ma dimostrazione della lavorazione artigianale.",
      },
      {
        id: 2,
        title: "Eco Friendly",
        description:
          "Sono fatta con materiali organici e naturali. Quel poco di plastica che troverai in me è plastica riciclata con processi sostenibili e riciclabile.",
      },
      {
        id: 3,
        title: "Durevole",
        description:
          "Sono fatta per durare a lungo, per diventare la tua seconda pelle. Utilizzo solo materiali di primissima qualità. Prenditi cura di me.",
      },
    ];

    return (
      <div className="py-12 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">3 Facts About Wortees.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="p-6 text-center bg-white shadow-lg rounded-lg border"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{fact.title}</h3>
              <p className="text-gray-600 text-sm">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default FactsSection;