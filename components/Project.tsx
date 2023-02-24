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
    <div className="flex flex-col h-screen p-4 lg:p-6">
      <div className="w-full h-full bg-slate-300 rounded-xl p-5">
        <div className="flex flex-col justify-between xl:grid xl:grid-cols-5 h-full max-h-full xl:grid-rows-[4fr_2fr_1fr]">
          <div className="col-span-5 xl:col-span-3 flex flex-col justify-center p-2 md:p-8 md:max-h-[50vh] xl:max-h-full ">
            <AppearInside>
              <Image
                src={img}
                alt={title}
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </AppearInside>
          </div>
          <div className="col-span-2 flex xl:flex-col justify-center items-center">
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
          <div className="col-span-5 px-10 py-4">{description}</div>
          <div className="col-span-5 flex justify-center gap-20 items-center p-5">
            <a href={links.github} className="text-blue-600">
              View code
            </a>
            <a href={links.vercel} className="text-blue-600">
              View site
            </a>
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
