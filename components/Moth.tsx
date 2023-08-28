import { useEffect, useRef } from "react";

const Moth = () => {
  const mothRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      console.log(event.clientX);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div ref={mothRef} className="">
      {/* <div className="relative -m-px h-8 w-8 animate-spin">
        <div className="absolute animate-spin-reverse">
          <div className="flex animate-fly gap-px">
            <div className="h-1 w-0.5 animate-flicker rounded-md bg-white"></div>
            <div className="h-1 w-0.5 animate-flicker  rounded-md bg-white"></div>
          </div>
        </div>
      </div> */}
      <div> KEKEKKE</div>
    </div>
  );
};

export default Moth;
