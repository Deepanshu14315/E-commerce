import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "../Utils/Axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";



const Details = () => {
  const added = () => {
    toast.success("Add to cart succesfully!");
    console.log('click')
  }

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
      console.log(product)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="h-screen m-auto w-[80%] flex p-[10%] items-center overflow-hidden">
      <img
        className="h-80 w-80 object-contain"
        src={product.image}
        alt=""
      />
      <div className="content flex flex-col justify-center p-10 w-[80%]">
        <h1 className="text-3xl ">{product.title}</h1>
        <h1 className="text-zinc-300 mt-4">{product.category}</h1>
        <h1 className="mt-3 mb-3 font-bold">
        ₹{product.price}
        </h1>
        <p className="leading-tight font-sm">{product.description}</p>

        <button onClick={added} className="w-28 bg-blue-400 text-white rounded-md px-4 py-2 mt-4 text-sm font-semibold">
          Add to cart
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
