import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-primary text-[#f5f5f5] p-3 font-[Montserrat]">
      <div className="grid grid-cols-2 border-b border-gray-200 md:grid-cols-6">
        <div className="px-4">
          <h3 className="uppercase text-lg font-bold pt-3">About</h3>
          <ul className="">
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Return Policy</li>
          </ul>
        </div>
        <div className="px-4">
          <h3 className="uppercase font-bold text-lg pt-3">Legal</h3>
          <ul>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Terms</li>
            <li className="py-2 text-sm">Conditions</li>
          </ul>
        </div>
        <div className="px-4">
          <h3 className="uppercase font-bold text-lg pt-3">Service</h3>
          <ul>
            <li className="py-2 text-sm">General Enquery</li>
            <li className="py-2 text-sm">Your Account</li>
            <li className="py-2 text-sm">Your Cart</li>
            <li className="py-2 text-sm">Your Order</li>
          </ul>
        </div>
        <div className="px-4">
          <h3 className="uppercase font-bold text-lg pt-3">Help</h3>
          <ul>
            <li className="py-2 text-sm">How to Purchase</li>
            <li className="py-2 text-sm">How to Search</li>
            <li className="py-2 text-sm">Making Payment</li>
            <li className="py-2 text-sm">Delivery Options</li>
          </ul>
        </div>

        <div className="col-span-2 py-8 px-4 md:pt-2">
          <h3 className="uppercase font-bold text-lg pt-3">
            Subscribe to our newsletter
          </h3>
          <p className="py-4">
            The lastest deals,articles, and resources, sent to your inbox
            weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="text"
              placeholder="Enter email..."
            />
            <button className="mb-4 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-3 justify-between sm:flex-row text-center text-[#f5f5f5]">
        <p className="py-4">2022 Experiences, LLC,All rights reserved</p>
        <div className="flex justify-between p-4 sm:w-[300px] items-center">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
