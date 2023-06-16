import React from "react";
import useOnTop from "./useOnTop";
import { ArrowDownIcon } from "./Icons";

const ScrollDownIndicator = () => {
  const onTop = useOnTop();
  return onTop ? (
    <div className="animate-bounce duration-500">
      <ArrowDownIcon />
    </div>
  ) : (
    <div className="animate-bounce opacity-0 duration-500">
      <ArrowDownIcon />
    </div>
  );
};

export default ScrollDownIndicator;
