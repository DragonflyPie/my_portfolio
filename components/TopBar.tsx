import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Flag from "./Flag";

interface TopBarProps {
  onClick: (elementRef: React.RefObject<HTMLDivElement>) => void;
  welcomeRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
}

const TopBar = ({ onClick, welcomeRef, contactsRef }: TopBarProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale, asPath } = router;

  const localeToSwitch = locale === "en" ? "ru" : "en";
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex justify-end content-center gap-8 fixed bg-transparent mr-0 w-screen p-5 pr-10 z-10">
      <a className="cursor-pointer" onClick={() => onClick(welcomeRef)}>
        HOME
      </a>
      <a className="cursor-pointer" onClick={() => onClick(contactsRef)}>
        CONTACTS
      </a>
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <MdOutlineLightMode size={28} />
        ) : (
          <MdDarkMode size={28} />
        )}
      </button>
      <Link
        href="/"
        as={asPath}
        locale={localeToSwitch}
        className="flex justify-center"
      >
        <span className="flex justify-center gap-1 items-center">
          <span className="text-center w-8">
            {localeToSwitch.toUpperCase()}
          </span>
          <Flag country={localeToSwitch} />
        </span>
      </Link>
    </nav>
  );
};

export default TopBar;
