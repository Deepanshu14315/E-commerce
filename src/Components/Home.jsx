import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";
import axios from "../Utils/Axios";


  


const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category)
  // console.log(search);
  // console.log(products)


  const [filteredProducts,setFilteredProducts] = useState(null);

  const getProductCategory = async () =>{
    try {
        const {data} = await axios.get(`/products/category/${category}`)
        // console.log(data)
        setFilteredProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!filteredProducts || category =="undefined") setFilteredProducts(products)
    if(category !="undefined") getProductCategory()
  },[category,products])

  return products ? (
    <>
      <Nav />

      <div className="h-full w-[80%] flex flex-wrap gap-6 p-10 overflow-x-hidden overflow-y-auto ">
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link
            key={p.id}
            to={`/details/${p.id}`}
            className="h-72 w-48 border rounded flex flex-col justify-center items-center p-3 shadow"
          >
            <div className="bg-zinc-100  overflow-hidden hover:scale-110 rounded">
              <img
                className="object-cover h-full w-full"
                src={p.image}
                alt=""
              />
            </div>
            <h1 className="leading-none mt-4 text-center">{p.title}</h1>
            <h2 className="font-bold mt-2">₹{p.price}</h2>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
