import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getCartTotal, getTotalQty } from "../features/slice/cartSlice";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const carts = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
    dispatch(getTotalQty());
  }, [carts]);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-[#f5f5f5] text-primary shadow-sm sticky top-0 z-20">
      <Link to={"/"}>
        <h3 className="font-[Comfortaa] font-bold text-3xl cursor-pointer">
          Shop.
        </h3>
      </Link>
      <ul className="sm:flex gap-10 font-[Montserrat] uppercase items-center cursor-pointer hidden">
        <NavLink to={"/home"} className={({isActive}) => isActive ? "font-extrabold" : ""}>
          <li className="transform hover:scale-110 duration-200">Home</li>
        </NavLink>
        <NavLink to={"/service"} className={({isActive}) => isActive ? "font-extrabold" : ""}>
          <li className="transform hover:scale-110 duration-200">Service</li>
        </NavLink>
        <NavLink to={"/products"} className={({isActive}) => isActive ? "font-extrabold" : ""}>
          <li className="transform hover:scale-110 duration-200">Product</li>
        </NavLink>
      </ul>
      <div className="flex justify-center items-center gap-3">
      <SearchBar/>
      <Link to={"/cart"}>
        <div className="relative hidden sm:flex">
          <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer transform hover:scale-110 duration-200"
          />
          <span className="absolute top-[-10px] right-[-8px] flex items-center justify-center text-bold text-[12px] border bg-primary text-[#f5f5f5] w-4 h-4 rounded-full">
            {carts?.length}
          </span>
        </div>
      </Link>
      </div>

      {nav ? (
        <AiOutlineClose
          size={25}
          onClick={handleNav}
          className="cursor-pointer text-primary z-20 sm:hidden"
        />
      ) : (
        <BiMenuAltRight
          size={25}
          onClick={handleNav}
          className="cursor-pointer text-primary z-20 flex sm:hidden"
        />
      )}
      <div
        className={
          nav
            ? "fixed w-full h-screen top-0 left-0 flex-col bg-black/90 z-10 sm:hidden"
            : "fixed left-[-100%] duration-200"
        }
      >
        <ul className="flex font-[Montserrat] uppercase flex-col w-full h-screen justify-center text-xl gap-10 items-center">
          <NavLink to={"/home"} className={({isActive}) => isActive ? "text-white" : ""}>
            <li className="cursor-pointer hover:text-[#f5f5f5] duration-100">
              Home
            </li>
          </NavLink>
          <NavLink to={"/serice"} className={({isActive}) => isActive ? "text-white" : ""}>
            <li className="cursor-pointer hover:text-[#f5f5f5] duration-100">
              Service
            </li>
          </NavLink>
          <NavLink to={"/products"} className={({isActive}) => isActive ? "text-white" : ""}>
            <li className="cursor-pointer hover:text-[#f5f5f5] duration-100">
              Product
            </li>
          </NavLink>
          <NavLink to={"/cart"} className={({isActive}) => isActive ? "text-white" : ""}>
            <li className="cursor-pointer hover:text-[#f5f5f5] duration-100">
              Cart
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
