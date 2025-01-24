
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import image1 from "../../assets/path-to-image11.png";
import image2 from "../../assets/path-to-image12.png";
import image3 from "../../assets/path-to-image13.png";

const CollectionSlider = () => {
  const collections = [
    {
      id: 1,
      image: image1,
      title: "Double",
      bgColor: "bg-red-600",
    },
    {
      id: 2,
      image: image2,
      title: "Double",
      bgColor: "bg-black",
    },
    {
      id: 3,
      image: image3,
      title: "Double",
      bgColor: "bg-gray-800",
    },
    {
      id: 4,
      image: image2,
      title: "Double",
      bgColor: "bg-blue-600",
    },
  ];

  return (
    <div className="py-12 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Scopri le Collezioni
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        // navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {collections.map((collection) => (
          <SwiperSlide key={collection.id}>
            <div className="relative rounded-lg shadow-lg overflow-hidden ">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-[450px] h-[460px] object-cover mx-auto"
              />
              <div
                className={`absolute bottom-0 left-0 right-0 px-4 py-2 ${collection.bgColor} text-white flex justify-between items-center`}
              >
                <span className="font-semibold text-lg">{collection.title}</span>
                <span className="text-xl">↗</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionSlider;
