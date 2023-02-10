import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Flag from "./Flag";
import strings from "../intl/stringsDic.json";

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
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale, asPath } = router;

  const lang = locale as "en" | "ru";

  const localeToSwitch = locale === "en" ? "ru" : "en";
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

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
            <MdOutlineLightMode size={24} />
          ) : (
            <MdDarkMode size={24} />
          )}
        </button>
        <Link
          href="/"
          as={asPath}
          locale={localeToSwitch}
          className="flex justify-center"
        >
          <span className="flex justify-center gap-1 items-center">
            <Flag country={localeToSwitch} />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default TopBar;
