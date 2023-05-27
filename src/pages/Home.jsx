import React from "react";
import shop from "../images/Online.png";
import Service from "./Service";
import { Link } from "react-router-dom";
import Products from "./Products";

const Home = () => {
  return (
    <>
     <div className="w-full h-screen grid md:grid-cols-2 gap-10 p-10 mb-56 lg:mb-0 md:mt-28 ">
        <div className="flex flex-col  h-96 lg:pl-24 font-[Montserrat] animate__animated animate__backInLeft">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl uppercase">
            Stay Home.<span className="block text-primary">Shop Online.</span>
          </h1>
          <p className="mt-5 mb-10 w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            doloribus veniam saepe quam, beatae consequatur magni vero eaque
            cupiditate, repellat nisi
          </p>
          <Link to={"/products"}>
          <button href="#" className="w-32 px-4 py-2 mx-auto md:mx-0 text-center font-bold border rounded-full bg-primary text-[#f5f5f5] hover:translate-x-3 duration-300">Shop</button>
          </Link>
        </div>
        <div className="mt-[-150px] md:mt-0 lg:mt-0 animate__animated animate__backInRight">
          <img
            src={shop}
            alt="shop"
            className="absolute md:right-10 lg:right-52 h-[350px]"
          />
        </div>
      </div>
    <Service/>
    <Products/>
    </>
  );
};

export default Home;
