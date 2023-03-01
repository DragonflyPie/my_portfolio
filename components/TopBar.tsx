import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Flag from "./Flag";
import strings from "../intl/stringsDic.json";
import useOutsideClick from "./useOutsideClick";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxDoubleArrowUp } from "react-icons/rx";
import useScrolledToTop from "./useScrolledToTop";

interface TopBarProps {
  onClick: (elementRef: React.RefObject<HTMLDivElement>) => void;
  welcomeRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const TopBar = ({
  onClick,
  welcomeRef,
  contactsRef,
  projectsRef,
}: TopBarProps) => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale } = router;

  const onTop = useScrolledToTop();

  const lang = locale as "en" | "ru";

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleOpen = () => {
    setOpen(!open);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  const handleClickFlag = (country?: string | false) => {
    router.push("/", "/", { locale: country, scroll: false });

    setOpen(false);
  };

  const ref = useOutsideClick(closeDropdown);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed z-10 flex w-screen content-center justify-between bg-slate-200 bg-opacity-20 py-2 px-5 font-navbar backdrop-blur-sm dark:bg-slate-600 dark:bg-opacity-50 md:justify-end md:px-6 lg:rounded-b-2xl">
      {/* <nav className="flex justify-between font-navbar backdrop-blur-sm bg-opacity-60 bg-slate-200 dark:bg-slate-600 dark:bg-opacity-50 md:justify-end md:gap-10 content-center fixed w-screen   lg:rounded-b-2xl py-2 px-5 z-10"> */}
      <div className="flex cursor-pointer items-center">
        {!onTop ? (
          <a
            className="opacity-1 duration-500"
            onClick={() => onClick(welcomeRef)}
          >
            <RxDoubleArrowUp
              size={20}
              className="hover:drop-shadow-dark dark:hover:drop-shadow-light"
            />
          </a>
        ) : (
          <a
            className="invisible opacity-0 duration-500"
            onClick={() => onClick(welcomeRef)}
          >
            <RxDoubleArrowUp
              size={20}
              className=" hover:drop-shadow-dark dark:hover:drop-shadow-light"
            />
          </a>
        )}
      </div>
      <div className="flex grow justify-around px-5 md:grow-0 md:justify-end md:gap-10 md:px-10">
        <a
          className="cursor-pointer duration-300 hover:drop-shadow-dark dark:hover:drop-shadow-light"
          onClick={() => onClick(projectsRef)}
        >
          {strings.projects[lang].toUpperCase()}
        </a>

        <a
          className="cursor-pointer duration-300 hover:drop-shadow-dark dark:hover:drop-shadow-light"
          onClick={() => onClick(contactsRef)}
        >
          {strings.contacts[lang].toUpperCase()}
        </a>
      </div>
      <div className="flex gap-5">
        <button onClick={toggleTheme} className="">
          {theme === "dark" ? (
            <MdOutlineLightMode
              size={20}
              className="hover:animate-spin-slow "
            />
          ) : (
            <MdDarkMode size={20} className="hover:animate-wiggle" />
          )}
        </button>
        <div
          className="relative flex flex-col content-center items-center justify-center"
          // className="flex flex-col content-center items-center justify-center relative"
          ref={ref}
        >
          <button
            onClick={handleOpen}
            className="flex items-center justify-center gap-1 duration-300 hover:drop-shadow-dark dark:hover:drop-shadow-light"
          >
            {locale?.toLocaleUpperCase()}
            <MdOutlineKeyboardArrowDown />
          </button>
          {open ? (
            <ul className="absolute top-6 right-1 flex flex-col content-center items-center gap-3 rounded bg-slate-400 p-2">
              <li className="m-0 flex p-0">
                <button onClick={() => handleClickFlag("en")}>
                  <Flag country={"en"}></Flag>
                </button>
              </li>
              <li className="m-0 flex p-0">
                <button onClick={() => handleClickFlag("ru")}>
                  <Flag country={"ru"}></Flag>
                </button>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
