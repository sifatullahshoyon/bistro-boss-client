import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-light-gray h-[400px] grid items-center">
          <div className="text-center text-white font-medium font-inter pl-16">
            <h4 className="mb-4 text-3xl">CONTACT US</h4>
            <p className="mb-2">123 ABS Street, Uni 21, Bangladesh</p>
            <p className="mb-2">+88 123456789</p>
            <p className="mb-2">Mon - Fri: 08:00 - 22:00</p>
            <p className="mb-2">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-deep-blue h-[400px] grid items-center">
          <div className="text-center text-white font-medium font-inter pr-16">
            <h4 className="mb-4 text-3xl">Follow US</h4>
            <p className="mb-4">Join us on social media</p>
            <div className="flex justify-center items-center gap-5 mb-2">
              <FaFacebookF className="text-2xl" />
              <FaInstagram className="text-2xl" />
              <FaTwitter className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light-black h-16 grid items-center">
        <p className="text-xl text-center text-white font-medium font-inter">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
