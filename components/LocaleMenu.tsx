import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RuFlag, EnFlag } from "./Flags";
import useClickOutside from "./useClickOutside";

const LocaleMenu = () => {
  const [open, setOpen] = useState(false);
  const localeRef = useRef(null);
  const router = useRouter();
  const { locale } = router;
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
  useClickOutside(localeRef, closeDropdown);
  return (
    <div
      className="relative flex flex-col content-center items-center justify-center"
      ref={localeRef}
    >
      <button
        onClick={handleOpen}
        className="flex items-center justify-center gap-1 hover:drop-shadow-dark dark:hover:drop-shadow-light"
      >
        {locale?.toLocaleUpperCase()}
        <MdOutlineKeyboardArrowDown />
      </button>
      {open ? (
        <ul className="absolute right-1 top-6 space-y-2 rounded-sm border border-black  bg-gray-400 p-2 duration-500">
          <li className="flex">
            <button onClick={() => handleClickFlag("en")} className="">
              <EnFlag />
            </button>
          </li>
          <li className="flex">
            <button onClick={() => handleClickFlag("ru")}>
              {/* <Flag country={"ru"}></Flag> */}
              <RuFlag />
            </button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default LocaleMenu;
