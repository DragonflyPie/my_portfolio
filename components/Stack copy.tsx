import {
  JavascriptIcon,
  ReactIcon,
  ReduxIcon,
  TypescriptIcon,
} from "./StackIcons";
import IconWrapper from "./IconWrapper";

const Stack = () => {
  return (
    <div className="group flex h-1/3 w-full items-end justify-between border border-b px-5  md:w-[700px]">
      <div className="relative flex translate-x-5 flex-col items-center delay-700 duration-200 group-hover:translate-x-0  group-hover:animate-none group-hover:delay-100 ">
        <div className="z-10 origin-bottom -translate-y-3 border border-black bg-white p-2 delay-1000 duration-300 group-hover:translate-y-0 group-hover:scale-95 group-hover:delay-0 group-hover:duration-75">
          <ReactIcon />
        </div>
        <div className="absolute bottom-0 z-0 h-3 w-1 translate-x-2 border-b-2 border-l border-black"></div>
        <div className="absolute bottom-0 z-0 h-3 w-1 -translate-x-1 border-b-2 border-l border-black"></div>
      </div>
      <div className=" relative flex  origin-bottom -translate-x-5 flex-col items-center delay-700 duration-200 group-hover:translate-x-0  group-hover:animate-none group-hover:delay-100 ">
        <div className="z-10 h-14 w-14 origin-bottom -translate-y-2 border border-black bg-white p-2 delay-1000 duration-200 group-hover:translate-y-0 group-hover:scale-95 group-hover:delay-0">
          <ReduxIcon />
        </div>
        <div className="absolute bottom-0 z-0 h-3 w-1 translate-x-2 border-b-2 border-r border-black"></div>
        <div className="absolute bottom-0 z-0 h-3 w-1 -translate-x-1 border-b-2 border-r border-black"></div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="z-10 h-12 w-12 origin-bottom origin-bottom -translate-x-3/4 duration-150 group-hover:translate-y-1 group-hover:scale-95">
          <IconWrapper title="Typescript">
            <TypescriptIcon />
          </IconWrapper>
        </div>

        <div className="z-10 h-20 w-20 origin-bottom duration-150 group-hover:scale-95">
          <IconWrapper title="Javascript">
            <JavascriptIcon />
          </IconWrapper>
        </div>
      </div>

      {/* <hr className="mt-auto w-full border-t border-black" /> */}
    </div>
  );
};

export default Stack;
