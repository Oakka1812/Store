import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useGetSingleProductQuery } from "../features/api";
import Star from "../components/Star";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/slice/cartSlice";
import { toast } from "react-toastify";
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
import Loading from "../components/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(id);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  

  const handleAddToCart = (product) => {
    let totalPrice = (quantity * product?.sale_price).toFixed(2);
    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice: totalPrice })
    );
    toast.success("Product added successfully");
  };

  const incQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
   <>
   {
    product !== undefined ? (
      <>
      <div className="w-full">
        <div className="w-[80%] md:flex md:items-center md:gap-5 mx-auto bg-white font-[Montserrat] mb-10 lg:mb-0">
          <div className="md:w-[40%]">
            <img className="w-full my-5" src={product?.image_url} />
          </div>
          <div className="md:w-[60%]">
            <h1 className="text-2xl text-primary font-bold mb-4 tracking-normal">
              {product?.name}
            </h1>
            <div className="flex gap-20 mb-5">
              <div className="flex items-center">
                <Star rating={product?.average_product_rating} />
              </div>
              <span className="bg-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
                {product?.average_product_rating}
              </span>
            </div>
            <div className="flex mb-4 items-center font-bold">
              <p className="font-bold text-lg tracking-wide">
                ${product?.sale_price}
              </p>
              <div className="vertical__line mx-5"></div>
              <p className="text-md">Category: {product?.category}</p>
              <div className="vertical__line mx-5"></div>
              <p className="text-md">Brand: {product?.brand}</p>
            </div>
            <p className="text-gray-400 tracking-wide text-sm mb-5">
              {product?.description.substring(0, 400)}
            </p>
            <div className="flex items-center gap-3 mb-8">
              <p className="tracking-wide text-lg font-bold">Quantity: </p>
              <button
              onClick={decQty}
                className="inline-flex items-center p-1.5 text-sm font-medium text-black bg-white border rounded-full focus:outline-none hover:bg-gray-100"
                type="button"
              >
                <span className="sr-only">Quantity button</span>
                <AiOutlineMinus />
              </button>
              <div className="border w-7 h-7 flex justify-center items-center rounded-full text-sm">
                <span>{quantity}</span>
              </div>
              <button
              onClick={incQty}
                className="inline-flex items-center p-1.5 text-sm font-medium text-black bg-white border rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                type="button"
              >
                <span className="sr-only">Quantity button</span>
                <AiOutlinePlus />
              </button>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="flex items-center align-bottom gap-1.5 text-lg text-[#f5f5f5] bg-primary rounded-md px-5 py-2 hover:translate-x-3 duration-300"
            >
              <BsCart size={20} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
    ) : (
      <Loading/>
    )
   }
   </>
  );
};

export default ProductDetails;
