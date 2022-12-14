import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

interface TopBarProps {
  onClick: (elementRef: React.RefObject<HTMLDivElement>) => void;
  welcomeRef: React.RefObject<HTMLDivElement>;
  contactsRef: React.RefObject<HTMLDivElement>;
}

const TopBar = ({ onClick, welcomeRef, contactsRef }: TopBarProps) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const localeToSwitch = locale === "en" ? "ru" : "en";
  //       <Link
  //   href={{ pathname, query }}
  //   as={asPath}
  //   locale={locale}
  //   legacyBehavior
  // >
  //   {locale}
  // </Link>

  return (
    <nav className="flex justify-center content-center gap-8 fixed bg-transparent mr-0 w-screen p-5 pr-10">
      <a className="cursor-pointer" onClick={() => onClick(welcomeRef)}>
        HOME
      </a>
      <a className="cursor-pointer" onClick={() => onClick(contactsRef)}>
        CONTACTS
      </a>
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <MdOutlineLightMode size={32} />
        ) : (
          <MdDarkMode size={32} />
        )}
      </button>
      <Link href="/" as={asPath} locale={localeToSwitch} legacyBehavior>
        {localeToSwitch.toUpperCase()}
      </Link>
    </nav>
  );
};

export default TopBar;
