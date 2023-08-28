import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex h-16 w-full items-center justify-center gap-4 bg-dune dark:bg-dark-blue ">
      <p className="">2023, Karasev Vladimir</p>{" "}
      <a href="https://github.com/DragonflyPie" target="_blank">
        <Image
          src={"/logos/github-mark.png"}
          alt="Github Link"
          width={20}
          height={20}
        />
      </a>
    </footer>
  );
};

export default Footer;
