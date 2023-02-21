import Image from "next/image";
import React, { useId } from "react";
import AnimateInside from "./AnimateInside";
import AppearInside from "./AppearInside";

interface ProjectProps {
  img?: string;
  title?: string;
  description?: string;
  techs?: React.ReactElement[];
  reference?: React.Ref<HTMLDivElement>;
}

const Project = ({
  img = "/testImg.png",
  title = "kek",
  description = "dfjksdkfgjksdgk",
  techs = [],
  reference,
}: ProjectProps) => {
  return (
    <div className="flex flex-col h-screen p-4">
      <div className="w-full h-full border-slate-800 border-2 rounded-xl">
        <div className="flex flex-col h-full">
          <div className="flex flex-col xl:flex-row h-full">
            <AppearInside>
              <Image
                src={img}
                alt={title}
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "20px",
                  padding: "10px",
                  minHeight: "100%",
                }}
              />
            </AppearInside>
            <div className="flex items-center p-2 xl:basis-1/3">
              {description}
            </div>
          </div>
          <div className="w-full h-fit flex justify-center gap-12">
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
      </div>
    </div>
  );
};

export default Project;
