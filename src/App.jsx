import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import { MdHome } from "react-icons/md";

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Link to='/' className=" absolute top-[1%] left-[1%] mb-6 text-3xl justify-start flex">
        <MdHome />
      </Link>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>} />
        
    </Routes>

    </div>
  );
};

export default App;
