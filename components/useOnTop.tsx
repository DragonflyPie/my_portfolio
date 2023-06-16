import React, { useEffect, useState } from "react";

const useOnTop = () => {
  const [onTop, setOnTop] = useState(true);

  const isBrowser = typeof window !== `undefined`;

  const handleScroll = () => {
    if (!isBrowser) return true;
    setOnTop(window.scrollY < 30);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [onTop]);

  return onTop;
};

export default useOnTop;
