import React from "react";
import { useGetProductsQuery } from "../features/api";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const Products = () => {
  const { data } = useGetProductsQuery();
// console.log(data.length);
  return (
    <>
    {
      data?.length > 0 ? (
        <>
        <div className="mt-10 mb-24">
        <div className="container mx-auto">
          <div className="mb-16">
            <h1 className="text-2xl font-bold text-center text-primary">Products</h1>
            <div className="horizontal__line mx-auto mt-3 rounded-2xl"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 p-5 md:grid-cols-4 md:p-0">
            {data?.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
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

export default Products;
