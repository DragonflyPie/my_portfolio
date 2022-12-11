import Image from "next/image";
import React from "react";

interface ProjectProps {
  bg?: string;
  img?: string;
  title?: string;
  description?: string;
  techs?: React.FC[];
}
const Project = ({
  bg = "bg-grey-500",
  img = "/randomImg.jpg",
  title = "kek",
  description = "dfjksdkfgjksdgk",
}: ProjectProps) => {
  return (
    <div className={`${bg} h-screen shrink-0 snap-center`}>
      <h1>{title}</h1>
      <Image width={400} height={400} src={img} alt={title} />
    </div>
  );
};

export default Project;
