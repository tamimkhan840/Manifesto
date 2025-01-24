import image1 from "../../../assets/path-to-image20.png";
import ProductCard from "./ProductCard";
const BestCollections = () => {
    
 const products = [
   {
     id: 1,
     title: "Zapoj",
     description: "Binge drinking; two or more days of continuous drunkenness.",
     price: "60,00 €",
     image: image1,
     tag: "Regular",
   },
   {
     id: 2,
     title: "Eresiarca",
     description: "One who habitually speaks blasphemy or great gibberish.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   {
     id: 3,
     title: "Listzomaniac",
     description: "A person who gets into a feverish frenzy during concerts.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   {
     id: 3,
     title: "Listzomaniac",
     description: "A person who gets into a feverish frenzy during concerts.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   {
     id: 3,
     title: "Listzomaniac",
     description: "A person who gets into a feverish frenzy during concerts.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   {
     id: 3,
     title: "Listzomaniac",
     description: "A person who gets into a feverish frenzy during concerts.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   {
     id: 3,
     title: "Listzomaniac",
     description: "A person who gets into a feverish frenzy during concerts.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   {
     id: 3,
     title: "Listzomaniac",
     description: "A person who gets into a feverish frenzy during concerts.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   {
     id: 3,
     title: "Listzomaniac",
     description: "A person who gets into a feverish frenzy during concerts.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   {
     id: 3,
     title: "Listzomaniac",
     description: "A person who gets into a feverish frenzy during concerts.",
     price: "60,00 €",
     image: image1,
     tag: "Oversize",
   },
   // Add more products as needed
 ];

  return (
    <section className="p-6 md:p-12">
      <h2 className="text-3xl font-bold text-center mb-8">Best Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestCollections
