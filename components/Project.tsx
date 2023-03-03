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
    <div className=" flex flex-col p-4 lg:p-6">
      <div className="flex flex-col justify-between gap-5 overflow-y-auto rounded-xl bg-slate-300 p-5 lg:grid lg:grid-cols-4 xl:gap-8 2xl:grid-cols-3">
        <div className="relative  aspect-video max-h-[70vh] md:p-8 lg:col-span-3 2xl:col-span-2">
          <Image src={img} alt={title} fill style={{ borderRadius: "10px" }} />
        </div>

        <div className="lg:col-span-4 2xl:col-span-1 2xl:col-start-3 2xl:row-start-1 2xl:px-5">
          <AppearInside>{description}</AppearInside>
        </div>
        <div className="row-start-2 flex items-center justify-center gap-5 md:pl-5 lg:col-start-4 lg:row-start-1 lg:flex-col  2xl:col-span-3 2xl:col-start-1 2xl:row-start-2 2xl:flex-row 2xl:pl-0">
          {techs.length
            ? techs.map((icon, index) => {
                return (
                  <AnimateInside key={index} index={index}>
                    <div className="relative rounded-2xl bg-slate-100 p-5 shadow-sm ">
                      {icon}
                    </div>
                  </AnimateInside>
                );
              })
            : ""}
        </div>

        <div className="flex items-center justify-center gap-20 p-4 lg:col-span-4">
          <a href={links.github} className="text-blue-600">
            View code
          </a>
          <a href={links.vercel} className="text-blue-600">
            View site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
