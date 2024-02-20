import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="py-10 px-5">
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="salads pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              Salads
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="pizzas pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              pizzas
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="Soups pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              Soups
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="desserts pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              desserts
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="salads pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              Salads
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="pizzas pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              pizzas
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="Soups pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              Soups
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="desserts pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              desserts
            </h4>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="salads pic" />
            <h4 className="text-3xl text-white -mt-16 mb-5  text-center font-cinzel">
              Salads
            </h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
