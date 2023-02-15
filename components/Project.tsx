import Image from "next/image";
import React from "react";
import Logos from "../public/tech";
import AnimateInside from "./AnimateInside";
import AppearInside from "./AppearInside";

interface ProjectProps {
  img?: string;
  title?: string;
  description?: string;
  techs?: string[];
  reference?: React.Ref<HTMLDivElement>;
}

const logosDictionary = {
  html: <Logos.Html />,
  css: <Logos.Css />,
};

type ObjectKey = keyof typeof logosDictionary;

const Project = ({
  img = "/testImg.png",
  title = "kek",
  description = "dfjksdkfgjksdgk",
  techs = ["html", "css"],
  reference,
}: ProjectProps) => {
  return (
    <div className="flex flex-col h-screen shrink-0 ">
      <div className="grid grid-cols-1 xl:grid-cols-2 px-5 w-full h-2/3">
        <AppearInside>
          <div className="relative w-full h-full ">
            <Image
              src={img}
              alt={title}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            />
          </div>
        </AppearInside>
        <div className="">{description}</div>
      </div>
      <div className="w-full flex justify-end gap-12">
        {techs.map((tech, index) => {
          if (logosDictionary.hasOwnProperty(tech)) {
            return (
              <AnimateInside key={tech} index={index}>
                <div className="relative">
                  {logosDictionary[tech.toLowerCase() as ObjectKey]}
                </div>
              </AnimateInside>
            );
          } else {
            return <div key={tech}>no icon</div>;
          }
        })}
      </div>
    </div>
  );
};

export default Project;
