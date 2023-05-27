import React, { useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  toggleQuantity,
  getCartTotal,
} from "../features/slice/cartSlice";

const CartDetails = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="gird grid-cols-1 ps-5 mb-3">
        <div className="border flex justify-between p-5 gap-3">
          <div className="w-24 p-2 rounded-lg">
            <img src={cart?.image_url} alt="image" />
          </div>
          <div className="flex flex-col w-full gap-5">
            <div className="flex justify-between font-bold text-lg">
              <h1>{cart?.name.substring(0, 15)}</h1>
              <h1>${cart?.totalPrice}</h1>
            </div>
            <p className="text-sm text-grey hidden lg:block">
              {cart?.description.substring(0, 200)}
            </p>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    dispatch(toggleQuantity({ id: cart?.id, type: "DEC" }))
                  }
                  className="inline-flex items-center p-1 text-sm font-medium text-white bg-black border border-gray-300 rounded-full focus:outline-none "
                  type="button"
                >
                  <AiOutlineMinus />
                </button>
                <span>{cart?.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(toggleQuantity({ id: cart?.id, type: "INC" }))
                  }
                  className="inline-flex items-center p-1 text-sm font-medium text-white bg-black border border-gray-300 rounded-full focus:outline-none  focus:ring-4 focus:ring-gray-200"
                  type="button"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <a
                  href="#"
                  onClick={() => dispatch(removeFromCart(cart))}
                  className="font-medium text-red-600 dark:text-red-500 hover:font-bold"
                >
                  <BsTrash size={20}/>
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
