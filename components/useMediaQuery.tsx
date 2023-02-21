import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const listener = () => {
      setMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [mobile]);

  return mobile;
};

export default useMediaQuery;
