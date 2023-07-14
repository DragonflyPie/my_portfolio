import Image from "next/image";
import React from "react";
import AnimateInside from "./AnimateInside";
import AppearInside from "./AppearInside";
import dictionary from "../intl/dictionary.json";

interface ProjectProps {
  img?: string;
  title: string;
  description: "chatGPT" | "timeJourney";
  techIcons?: { icon: React.ReactElement; name: string }[];
  lang: "en" | "ru";
  github: string;
  url: string;
}

const Project = ({
  img = "/testImg.png",
  title = "kek",
  description,
  techIcons = [],
  github,
  url,
  lang = "en",
}: ProjectProps) => {
  return (
    <div className="flex  flex-col justify-between gap-6 overflow-y-auto rounded bg-dune p-5 dark:bg-slate-800 ">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="relative aspect-video  basis-1/2 md:p-8">
          <Image src={img} alt={title} fill className="border border-black" />
        </div>
        <div className="flex basis-1/2 flex-col">
          {dictionary[description].map((section) => (
            <div className="" key={section["en"]}>
              <AppearInside>{section[lang]}</AppearInside>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap flex flex-wrap items-center justify-center gap-3 md:gap-5 md:pl-5">
        {techIcons.length
          ? techIcons.map((el, index) => {
              return (
                <AnimateInside key={index} index={index} title={el.name}>
                  {el.icon}
                </AnimateInside>
              );
            })
          : ""}
      </div>

      <div className="flex items-center justify-center gap-20 p-4 lg:col-span-4">
        <a
          href={github}
          className="text-link-light transition-colors hover:text-link-dark"
        >
          View code
        </a>
        <a
          href={url}
          className="text-link-light transition-colors hover:text-link-dark"
        >
          View site
        </a>
      </div>
    </div>
  );
};

export default Project;
