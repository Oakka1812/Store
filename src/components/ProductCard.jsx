import { BsPlusCircle, BsFillEyeFill } from "react-icons/bs";
import Star from "./Star";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <>
      <div className="w-[350px] md:w-full mx-auto bg-white border border-gray-200 shadow">
        <Link to={`/detail/${item?.id}`}>
          <img
            className="h-[200px] w-full object-cover mx-auto transform duration-300 hover:scale-105"
            src={item?.image_url}
            alt="product image"
          />
        </Link>
        <div className="px-5 py-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-primary">
              {item?.name.substring(0, 20)}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <Star rating={item?.average_product_rating} />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
              {item?.average_product_rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">${item?.sale_price}</span>
            <Link to={`/detail/${item?.id}`}>
              <BsFillEyeFill
                size={25}
                className="cursor-pointer hover:text-primary duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
