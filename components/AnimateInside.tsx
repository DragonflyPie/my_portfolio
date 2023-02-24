import { useRef, useState } from "react";
import useElementOnScreen from "./useElementOnScreen";

interface AnimateProps extends React.PropsWithChildren {
  index: number;
}

const AnimateInside = ({ children, index }: AnimateProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);

  const delay = `${(index + 1) * 100}ms`;

  return (
    <div
      ref={ref}
      className={
        onScreen
          ? "opacity-1 blur-0 translate-x-0 ease-[cubic-bezier(.78,.34,.49,1.25)] duration-700"
          : "opacity-0 blur-sm translate-x-[100%]"
      }
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
