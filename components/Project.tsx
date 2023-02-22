import Image from "next/image";
import React, { useId } from "react";
import AnimateInside from "./AnimateInside";
import AppearInside from "./AppearInside";
import { link } from "fs";
import Link from "next/link";

interface ProjectProps {
  img?: string;
  title?: string;
  description?: string;
  techs?: React.ReactElement[];
  links?: { vercel: string; github: string };
}

const Project = ({
  img = "/testImg.png",
  title = "kek",
  description = "LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  techs = [],
  links = { vercel: "www.vercel.com", github: "www.github.com" },
}: ProjectProps) => {
  return (
    <div className="flex flex-col h-screen p-4">
      <div className="w-full h-full bg-slate-300 rounded-xl">
        <div className="grid grid-cols-1  lg:grid-cols-5 h-full grid-rows-[auto_1fr_2fr_1fr] lg:grid-rows-[auto_2fr_1fr]">
          <div className="col-span-5 lg:col-span-3 ">
            <AppearInside>
              <Image
                src={img}
                alt={title}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  padding: "10px",
                }}
              />
            </AppearInside>
          </div>
          <div className="col-span-5 lg:col-span-2 flex lg:flex-col justify-center gap-20 items-center h-full">
            <a>{links.github}</a>
            <a>{links.vercel}</a>
          </div>
          <div className="col-span-5 p-10">{description}</div>
          <div className="col-span-5 w-full flex justify-center items-center gap-12 grow">
            {techs.length
              ? techs.map((icon, index) => {
                  return (
                    <AnimateInside key={index} index={index}>
                      <div className="relative">{icon}</div>
                    </AnimateInside>
                  );
                })
              : ""}
          </div>
        </div>
        {/* <div className="flex flex-col h-full">
          <div className="flex flex-col grow lg:flex-row">
            <div className="w-full h-fit">
              <AppearInside>
                <Image
                  src={img}
                  alt={title}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                    padding: "10px",
                  }}
                />
              </AppearInside>
            </div>
            <div className="flex flex-col justify-start items-center p-5  basis-1 lg:basis-1/3">
              {description}
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-12 grow">
            {techs.length
              ? techs.map((icon, index) => {
                  return (
                    <AnimateInside key={index} index={index}>
                      <div className="relative">{icon}</div>
                    </AnimateInside>
                  );
                })
              : ""}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
