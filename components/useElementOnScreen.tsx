import { RefObject, useEffect, useState } from "react";

function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const outerObsersver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setIsIntersecting(false);
      },
      { rootMargin }
    );
    const innerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsIntersecting(true);
      },
      { rootMargin: "-300px 0px" }
    );

    if (ref.current) {
      outerObsersver.observe(ref.current);
      innerObserver.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        innerObserver.unobserve(ref.current);
        outerObsersver.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

export default useElementOnScreen;
