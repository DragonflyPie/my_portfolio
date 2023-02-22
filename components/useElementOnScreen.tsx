import { RefObject, useEffect, useState } from "react";

function useElementOnScreen(
  ref: RefObject<Element>,

  threshold = 0
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const outerObsersver = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) setIsIntersecting(false);
    }, {});
    const innerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsIntersecting(true);
      },
      { rootMargin: "-10% 0px", threshold: threshold }
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
