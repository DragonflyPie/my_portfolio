import { ReactElement, ReactNode } from "react";

interface IconWrapperProps {
  children: ReactElement;
  title: string;
  size?: "sm" | "md" | "lg" | "sm-extrapixel";
}

const IconWrapper = ({ children, title, size = "md" }: IconWrapperProps) => {
  return (
    <div
      className={`rounded-sm border border-gray-800  p-1 text-white dark:border-white dark:bg-blackish dark:text-black md:p-2 ${
        size === "sm"
          ? "h-8 w-8 md:h-12 md:w-12"
          : size === "lg"
          ? "h-16 w-16 p-2 md:h-24 md:w-24 md:p-4"
          : size === "sm-extrapixel"
          ? "h-[33px] w-8 md:h-[49px] md:w-12"
          : "h-12 w-12 p-2 md:h-16 md:w-16 md:p-3"
      }`}
      title={title}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
