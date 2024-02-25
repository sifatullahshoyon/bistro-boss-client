import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/review`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="py-20 px-5 container mx-auto">
      <div>
        <SectionTitle
          subHeading="What Our Clients Say"
          heading="TESTIMONIALS"
        ></SectionTitle>
      </div>
      <div data-aos="fade-down">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center items-center px-10">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-solid text-5xl my-8" />
                <p className="font-inter font-normal text-xl text-[#444444] px-10">
                  {review?.details ? review?.details : "Data Not Found"}
                </p>
                <h2 className="font-inter font-medium text-dark-yellow text-3xl  pt-2 uppercase">
                  {review?.name ? review.name : "Data Not Found"}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
