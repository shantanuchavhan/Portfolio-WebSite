import React from "react";
import Icon from "../../images/blog.png"
import Header from "../../components/Header/Header";
const Blog = () => {
  return (
    <div>
      <Header Icon={Icon} sectonName={"Blog "}/>
      <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full w-screen"></div>
    </div>
  );
};

export default Blog;
