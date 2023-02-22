import React, { useRef } from "react";
import useElementOnScreen from "./useElementOnScreen";

const AppearInside = ({ children }: React.PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref, 0.5);

  return (
    <div
      ref={ref}
      className={
        onScreen
          ? "opacity-1  duration-1000 relative aspect-video"
          : "opacity-0 blur-sm aspect-video"
      }
    >
      {children}
    </div>
  );
};

export default AppearInside;
