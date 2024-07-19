import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import { MdHome } from "react-icons/md";

const Nav = () => {
  const [products] = useContext(ProductContext);
  let distinctCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinctCategory = [...new Set(distinctCategory)];
  // console.log(distinctCategory);

  const color = () => {
    return `rgba(${Math.floor(Math.random()*255)},
      ${Math.floor(Math.random()*255)},
      ${(Math.random() * 255).toFixed()},0.4)`;
  };
  // console.log(color())

  return (
    <nav className=" w-[36%] lg:w-[20%] h-screen bg-zinc-100 flex flex-col  p-5 items-center">
      
      <Link
        to="/"
        className=" text-blue-600 px-4 py-2 mt-8 text-xl border font-semibold rounded-md mb-4 whitespace-nowrap"
      >
        E Commerce
      </Link>
      <h1 className="mt-2 font-semibold lg:text-xl text-gray-800">Category Filter</h1>
      <hr className="w-[80%] mt-2" />
      <div className="w-[100%] lg:w-[80%] mt-4 lg:text-lg">
        {distinctCategory.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="flex items-center gap-2 mb-2 rounded-md px-2"
          >
            <span
              style={{ backgroundColor: color() }}
              className=" h-[15px]  w-[15px]  rounded-full  shrink-0"
            ></span>
            <h2 className="hover:text-[#6674F0] font-semibold capitalize">
              {c}
            </h2>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
