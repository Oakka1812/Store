import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartDetails from "./CartDetails";
import { Link } from "react-router-dom";
import emptyCart from "../images/cart.png";
import { clearCart } from "../features/slice/cartSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart.carts);
  const totalQty = useSelector((state) => state.cart.totalQty);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  return (
    <>
      {carts?.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[600px] font-[Montserrat]">
          <img src={emptyCart} alt="emptybag" className="h-24 mb-5" />
          <h1 className="uppercase text-md sm:text-2xl text-red-500 font-bold mb-3">
            Your Shopping cart is Empty
          </h1>
          <p className="text-[12px] sm:text-sm text-gray-300 mb-5">
            You have not added any items to your shopping cart
          </p>
          <Link to={"/products"}>
            <button className="border-primary text-primary font-bold px-5 transform hover:scale-105 duration-300 hidden sm:block">
              Go shopping now
            </button>
          </Link>
          <Link to={"/products"}>
            <button className="border-primary text-primary font-bold px-5 transform hover:scale-105 duration-300 block sm:hidden">
              Shop
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-full flex font-[Montserrat]">
          <div className="relative w-full sm:w-[70%] overflow-x-auto my-10">
            
            {
              carts?.map((cart) => <CartDetails key={cart.id} cart={cart}/>)
            }
          </div>
          <div className="w-[30%] my-10 mx-5 hidden lg:block">
            <div className="border p-5 bg-primary text-white">
              <div className="flex justify-between mb-3 tracking-wide">
                <p>Items</p>
                <p>{carts?.length}</p>
              </div>
              <div className="flex justify-between mb-3 tracking-wide">
                <p>Total Qty</p>
                <p>{totalQty}</p>
              </div>
              <hr />
              <div className="flex justify-between my-5 tracking-wide">
                <p className="text-xl">Total</p>
                <p className="text-xl">${totalAmount.toFixed(2)}</p>
              </div>
              <button className="w-full rounded-md bg-white text-black font-bold mb-2">
                Checkout
              </button>
              <Link to={"/products"}>
                <button className="w-full rounded-md bg-white text-black font-bold mb-2">
                  Continue shopping
                </button>
              </Link>
              <button
                onClick={() => dispatch(clearCart())}
                className="w-full rounded-md bg-white text-black font-bold"
              >
                Empty cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
