import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex   gap-3">
        <h2 className="text-white text-[30px]">Web-Creator</h2>
        <ReactLoading type="spokes" color="#0000FF" height={100} width={50} />
      </div>
    </div>
  );
};

export default Loading;
