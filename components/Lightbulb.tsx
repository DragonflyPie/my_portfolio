import Moth from "./Moth";

const Lightbulb = () => {
  return (
    <div className="">
      <div className="group relative mt-4 flex min-w-[56px] scale-50 flex-col items-center justify-center md:scale-100">
        <div className="absolute -top-[15px] h-4 w-5 rounded-full bg-gray-700 dark:bg-slate-300 "></div>
        <div className="absolute -top-3 flex h-4 w-5 flex-col justify-around  rounded-t-sm border border-black bg-white dark:bg-slate-300 ">
          <div className="-rotate-3 border-t-2 border-t-black"></div>
          <div className="-rotate-3 border-t-2 border-t-black"></div>
          <div className="-rotate-3 border-t-2 border-t-black"></div>
        </div>
        <div className="-z-10 h-8 w-8 rounded-full border border-black transition-colors duration-300  dark:bg-yellow-400 dark:shadow-lightBult   group-hover:dark:animate-blackout">
          <div className="absolute h-8 w-8 animate-pulse-slow rounded-full border shadow-xl blur  dark:bg-yellow-300"></div>
          <div className="absolute left-5 hidden group-hover:animate-fly dark:block">
            <Moth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbulb;
