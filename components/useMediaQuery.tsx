import { useEffect, useState } from "react";

const useMediaQuery = (query: number) => {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${query}px)`);
    if (media.matches !== mobile) {
      setMobile(media.matches);
    }

    const listener = () => {
      setMobile(media.matches);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [mobile, query]);

  return mobile;
};

export default useMediaQuery;
