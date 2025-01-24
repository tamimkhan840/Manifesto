
import BestCollections from "./bestCollections/Index";
import Manifest from "./Manifest";

const BestCollection = () => {
  return (
    <div className="font-sans mt-6">
      <Manifest />
      <BestCollections />
    </div>
  );
};

export default BestCollection;
