import { useRef, useState } from "react";
import useElementOnScreen from "./useElementOnScreen";

interface AnimateProps extends React.PropsWithChildren {
  index: number;
  title: string;
}

const AnimateInside = ({ children, index, title }: AnimateProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  const delay = `${(index + 1) * 100}ms`;

  return (
    <div
      ref={ref}
      title={title}
      className={`relative h-10 w-10 rounded-sm border border-gray-800 bg-white p-1 text-white shadow-sm dark:border-white dark:bg-blackish dark:text-black md:h-12 md:w-12 md:p-2 lg:h-14 lg:w-14 lg:p-3
      
        ${
          onScreen
            ? "opacity-1 translate-x-0 blur-0 duration-700 ease-[cubic-bezier(.78,.34,.49,1.25)]"
            : "translate-x-[100%] opacity-0 blur-sm"
        }`}
      style={
        onScreen
          ? {
              transitionDelay: delay,
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default AnimateInside;
