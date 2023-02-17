import React from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import useScrolledToTop from "./useScrolledToTop";

const ScrollAnimation = () => {
  const onTop = useScrolledToTop();
  return onTop ? (
    <div className="absolute w-full flex justify-center bottom-5 opacity-1 duration-500">
      <BsFillArrowDownSquareFill className="animate-bounce" />
    </div>
  ) : (
    <div className="absolute w-full flex justify-center bottom-5 opacity-0 duration-500">
      <BsFillArrowDownSquareFill className="animate-bounce" />
    </div>
  );
};

export default ScrollAnimation;
