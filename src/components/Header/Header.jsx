import React from "react";

const Header = ({ Icon, sectonName }) => {
  return (
    <div className="flex justify-between items-end pl-3 h-1/6 border-b border-dotted border-[#f8fee9] p-4">
      <h1 className="text-4xl m-2">{sectonName}</h1>
      <div>
        <img className=" h-8 w-8 m-2 " src={Icon} alt="" />
      </div>
    </div>
  );
};

export default Header;
