import CollectionSlider from "../../../component/CollectionSlider/Index"
import HeroSection from "../../../component/HeroSection/Index"
import ProductCards from "../../../component/productCard/Index"


function HomeIndex() {
  return (
    <div className="container mx-auto">
      <div><HeroSection /></div>
      <div><CollectionSlider /></div>
      <div><ProductCards /></div>
    </div>
  )
}

export default HomeIndex
