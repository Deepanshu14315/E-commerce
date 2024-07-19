import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-screen h-scrren bg-zinc-100 flex justify-center items-center">
      <div className="text-6xl font-semibold">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        
      </div>
    </div>
  );
};

export default Loading;
