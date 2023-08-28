import { useTheme } from "next-themes";

const Switch = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="flex min-w-[56px]  justify-center">
      <div
        onClick={toggleTheme}
        className="relative flex h-10 w-10 shrink-0  cursor-pointer items-center justify-center overflow-hidden rounded border border-black dark:border-white"
      >
        <div className="absolute left-full z-0 w-[300%]  -rotate-45 animate-dash border-b border-gray-500 dark:hidden"></div>
        <div className="absolute  left-[120%] z-0 w-[300%]  -rotate-45 animate-dash border-b border-gray-500 dark:hidden"></div>
        <div className="absolute left-0.5 top-0.5 h-1 w-1 rounded-full border border-black dark:border-white "></div>
        <div className="absolute bottom-0.5 right-0.5 h-1 w-1 rounded-full border border-black dark:border-white "></div>
        <div className="z-10 h-6 w-4 rounded-sm border border-black bg-blackish pb-0 pt-1 transition-all dark:border-white dark:bg-white dark:pb-1 dark:pt-0">
          <div className="flex h-full w-full flex-col items-center justify-around bg-whitish dark:bg-blackish ">
            <div className="h-1 w-px bg-blackish dark:bg-white"></div>
            <div className="h-1 w-1 rounded-full border border-black dark:border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
