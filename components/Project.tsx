import Image from "next/image";
import React from "react";
import AnimateInside from "./AnimateInside";
import AppearInside from "./AppearInside";
import dictionary from "../intl/dictionary.json";
import { ExternalLink } from "./Icons";
import ProjectLink from "./ProjectLink";

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
    <div className="flex  flex-col justify-between gap-4 overflow-y-auto rounded bg-dune p-5  dark:bg-dark-blue md:gap-6 lg:gap-14 ">
      <div className="flex flex-col gap-3 md:gap-5  lg:flex-row lg:gap-10 ">
        <div className="relative aspect-video  basis-1/2">
          <Image src={img} alt={title} fill className="rounded" />
        </div>
        <div className="flex basis-1/2 flex-col">
          {dictionary[description].map((section) => (
            <div className="" key={section["en"]}>
              <AppearInside>{section[lang]}</AppearInside>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap flex flex-wrap items-center justify-center gap-3 md:gap-5 ">
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

      <div className="flex items-center justify-center gap-20 lg:col-span-4">
        <ProjectLink url={github} value="Code" />
        <ProjectLink url={url} value="Website" />
      </div>
    </div>
  );
};

export default Project;
