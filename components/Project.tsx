import Image from "next/image";
import React from "react";
import Logos from "../public/tech";
import AnimateInside from "./AnimateInside";

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
  img = "/randomImg.jpg",
  title = "kek",
  description = "dfjksdkfgjksdgk",
  techs = ["html", "css"],
  reference,
}: ProjectProps) => {
  return (
    <div className="h-screen shrink-0 snap-center">
      <h1>{title}</h1>
      <Image width={400} height={400} src={img} alt={title} />
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
