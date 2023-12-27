import React from "react";

const Header = ({ Icon, sectonName }) => {
  return (
    <div className="flex justify-between items-end  h-1/6 border-b border-dotted border-[#f8fee9] pt-10 py-2">
      <h1 className="text-3xl lg:text-4xl my-2 ">{sectonName}</h1>
      <div>
        <img className=" h-8 w-8 my-2  " src={Icon} alt="" />
      </div>
    </div>
  );
};

export default Header;
