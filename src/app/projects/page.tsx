import React from "react";

const page = () => {
  return (
    <div className="flex flex-col jusfity-center items-center ">
      <div className="snap-x px-10 text-black py-4 gap-2 items-center flex">
        <div className="snap-normal snap-center bg-[#c3c99e] rounded-2xl items-center gap-2">
          <div className="px-4 py-10">
            <p>Javascript</p>
          </div>
        </div>
        <div className="snap-normal snap-center bg-[#7d9ca5] rounded-2xl">
          <div className="px-4 py-10">
            <p>React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
