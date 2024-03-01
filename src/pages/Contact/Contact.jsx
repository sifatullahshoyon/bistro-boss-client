import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Home/Home/Shared/Cover/Cover";
import contactImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import LocationBox from "../../components/LocationBox/LocationBox";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section>
      {/* Dynamic Title Part*/}
      <Helmet>
        <title>Bistro Boss | Contact Us</title>
      </Helmet>
      {/* Main Cover */}
      <div>
        <Cover
          bgImg={contactImg}
          title="CONTACT US"
          details="Would you like to try a dish?"
        />
      </div>
      {/* Location Section Start*/}
      <div className="container mx-auto py-20 px-5">
        <div className="pt-10">
          <SectionTitle subHeading="Visit Us" heading="OUR LOCATION" />
        </div>
        <div className="md:flex md:flex-row justify-center items-center gap-4">
          <LocationBox
            icon={<FiPhoneCall />}
            title={"phone"}
            subTitle={"+38 (012) 34 56 789"}
          />
          <LocationBox
            icon={<FaLocationDot />}
            title={"address"}
            subTitle={"Dhaka , Bangladesh"}
          />
          <LocationBox
            icon={<CiClock2 />}
            title={"WORKING HOURS"}
            subTitle={"Mon - Fri: 08:00 - 22:00"}
            anotherTitle={"Sat - Sun: 10:00 - 23:00"}
          />
        </div>
        {/* Location Section End*/}

        {/* Contact Form*/}
        <div className="pt-20">
          <SectionTitle subHeading="Send Us a Message" heading="CONTACT FORM" />
        </div>
        <div className="h-[1070px] bg-[#F3F3F3] mt-5 p-5 mb-40">
          <form className="card-body">
            <div className="grid grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-solid font-bold">Name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-solid font-bold">
                    Email*
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-solid font-bold">Phone*</span>
              </label>
              <input
                type="Number"
                placeholder="Enter your Phone Number"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-solid font-bold">
                  Message*
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered bg-white"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div className="form-control mt-6 mx-auto pt-10">
              <button className="btn btn-primary w-[220px] flex justify-center items-center text-xl text-white bg-gradient-to-r from-[#835D23] to-[#835D23]">
                Login
                <FaTelegramPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
