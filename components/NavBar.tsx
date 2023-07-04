import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dictionary from "../intl/dictionary.json";
import { RxDoubleArrowUp } from "react-icons/rx";
import useOnTop from "./useOnTop";
import NavLink from "./NavLink";
import LocaleMenu from "./LocaleMenu";
import { MoonIcon, SunIcon } from "./Icons";

interface TopBarProps {
  handleClick: (elementRef: React.RefObject<HTMLDivElement>) => void;
  contactsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
}

const NavBar = ({ handleClick, contactsRef, projectsRef }: TopBarProps) => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale } = router;

  const onTop = useOnTop();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const lang = locale as "en" | "ru";

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className=" fixed z-10 flex w-screen content-center justify-between bg-white bg-opacity-20 px-5 py-2 font-navbar backdrop-blur-sm dark:bg-black dark:bg-opacity-50 md:justify-end md:px-6 ">
      <div className="flex cursor-pointer items-center">
        <a
          className={
            onTop
              ? "h-0 w-0 cursor-default opacity-0"
              : "opacity-1 transition-opacity duration-500"
          }
          onClick={scrollTop}
        >
          <RxDoubleArrowUp
            size={20}
            className="hover:drop-shadow-dark dark:hover:drop-shadow-light "
          />
        </a>
      </div>
      <div className="flex grow justify-end gap-10 px-5 md:grow-0 md:justify-end md:px-10">
        <NavLink
          value={dictionary.menu.projects[lang]}
          handleClick={handleClick}
          sectionRef={projectsRef}
        />

        <NavLink
          value={dictionary.menu.contacts[lang]}
          handleClick={handleClick}
          sectionRef={contactsRef}
        />
      </div>
      <div className="flex gap-5">
        <button onClick={toggleTheme} className="h-6 w-6">
          {theme === "dark" ? (
            <div className="duration-[2s] hover:rotate-180">
              <SunIcon />
            </div>
          ) : (
            <div className="">
              <MoonIcon />
            </div>
          )}
        </button>
        <LocaleMenu />
      </div>
    </nav>
  );
};

export default NavBar;
