import React, { useState } from "react";
import FoodCard from "../../Home/Home/Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      {/* <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pb-5"
    >
      {items?.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div> */}
      {/*  apply pagination */}
      <div>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pb-5"
            >
              {currentItems?.map((item, index) => (
                <FoodCard key={index} item={item} />
              ))}
            </div>

            {/* <div>
              <button
                className="btn btn-primary text-black"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastItem >= currentItems.length}
              >
                Next
              </button>
            </div> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderTab;
