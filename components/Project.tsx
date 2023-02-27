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
    <div className="flex h-screen flex-col p-4 lg:p-6">
      <div className="h-full w-full rounded-xl bg-slate-300 p-5 ">
        <div className="flex h-full flex-col justify-between lg:grid lg:grid-cols-4 2xl:grid-cols-3 ">
          <div className="relative  aspect-video max-h-[70vh] md:p-8 lg:col-span-3 2xl:col-span-2">
            {/* <div className="relative aspect-video h-full w-full"> */}
            <Image
              src={img}
              alt={title}
              fill
              style={{ borderRadius: "10px" }}
            />
            {/* </div> */}
          </div>
          <div className="lg:col-span-4 2xl:col-span-1 2xl:col-start-3 2xl:row-start-1 2xl:px-5">
            <AppearInside>{description}</AppearInside>
          </div>
          <div className="row-start-2 flex items-center justify-center gap-1 md:gap-5 md:pl-5 lg:col-start-4 lg:row-start-1 lg:flex-col lg:justify-start 2xl:col-span-3 2xl:col-start-1 2xl:row-start-2 2xl:flex-row 2xl:justify-center 2xl:pl-0">
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

          <div className="flex items-center justify-center gap-20 p-5 lg:col-span-4">
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
