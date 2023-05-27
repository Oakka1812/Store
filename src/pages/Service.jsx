import React from "react";
import { BsDashLg, BsFolder } from "react-icons/bs";
import price from "../images/price.png";
import cashback from "../images/cashback.png";
import deliver from "../images/fast-delivery.png";
import Loading from "../components/Loading";

const Service = () => {
  return (
    <div className="mb-24 w-full">
      <div className="max-w-[1440px] bg-[#f5f5f5] p-16 font-[Montserrat]">
        <div className="flex items-center flex-col mb-16">
          <h2 className="font-bold text-2xl text-primary">Service</h2>
          <div className="horizontal__line mx-auto mt-3 rounded-2xl"></div>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-3">
          <div className="w-[70%] md:w-[30%] flex flex-col items-center p-5 animate__animated animate__backInLeft">
            <img src={price} alt="" className="h-24 sm:h-28 mb-3" />
            <p className="font-bold text-xl mb-5 text-primary">Fixed Prices</p>
            <p className="text-sm text-slate-400">Price fits for you shopping needs and other</p>
          </div>
          <div className="w-[70%] md:w-[30%] flex flex-col items-center p-5 animate__animated animate__backInUp">
            <img src={cashback} alt="" className="h-24 sm:h-28 mb-3" />
            <p className="font-bold text-xl mb-5 text-primary">Money Back</p>
            <p className="text-sm text-slate-400">Money back guarantee will be safe</p>
          </div>
          <div className="w-[70%] md:w-[30%] flex flex-col items-center p-5 animate__animated animate__backInRight">
            <img src={deliver} alt="" className="h-24 sm:h-28 mb-3" />
            <p className="font-bold text-xl mb-5 text-primary">Fast Delivery</p>
            <p className="text-sm text-slate-400">Delivery is very fast until the destination you request</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
