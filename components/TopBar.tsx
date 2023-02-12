import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Flag from "./Flag";
import strings from "../intl/stringsDic.json";
import useOutsideClick from "./useOutsideClick";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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

  const lang = locale as "en" | "ru";

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleOpen = () => {
    setOpen(!open);
  };

  const closeDropdown = () => {
    setOpen(false);
  };

  const handleClickFlag = (country?: string | false) => {
    router.push("/", "/", { locale: country });
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
    <nav className="flex justify-around font-navbar  md:justify-end md:gap-10 content-center fixed w-screen md:right-4 lg:w-fit lg:rounded-b-2xl bg-opacity-80 dark:bg-opacity-80 bg-slate-200 dark:bg-slate-600 py-4 md:p-4 z-10">
      {/* <nav className="flex justify-end content-center gap-8 fixed w-screen md:w-fit md:rounded-3xl md:right-6 bg-opacity-60 dark:bg-opacity-80 bg-slate-200 dark:bg-slate-600 p-2 md:p-5 z-10"> */}
      <a
        className="cursor-pointer font-primary"
        onClick={() => onClick(welcomeRef)}
      >
        {strings.about[lang].toUpperCase()}
      </a>
      <a className="cursor-pointer" onClick={() => onClick(projectsRef)}>
        {strings.projects[lang].toUpperCase()}
      </a>
      <a className="cursor-pointer" onClick={() => onClick(contactsRef)}>
        {strings.contacts[lang].toUpperCase()}
      </a>
      <div className="flex gap-5">
        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <MdOutlineLightMode size={24} className="hover:animate-spin" />
          ) : (
            <MdDarkMode size={24} />
          )}
        </button>
        <div
          className="flex flex-col content-center items-center justify-center relative"
          ref={ref}
        >
          <button
            onClick={handleOpen}
            className="flex justify-center gap-1 items-center"
          >
            {locale?.toLocaleUpperCase()}
            <MdOutlineKeyboardArrowDown />
          </button>
          {open ? (
            <ul className="absolute bg-slate-500 top-6 content-center items-center flex flex-col gap-3 p-2 rounded">
              <li className="p-0 m-0 flex">
                <button onClick={() => handleClickFlag("en")}>
                  <Flag country={"en"}></Flag>
                </button>
              </li>
              <li className="p-0 m-0 flex">
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
