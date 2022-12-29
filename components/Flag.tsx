import React from "react";
import RuFlag from "../public/flags/ru.svg";
import GbFlag from "../public/flags/gb.svg";

interface FlagProps {
  country: "en" | "ru";
}

const Flag = ({ country }: FlagProps) => {
  return country === "en" ? (
    <GbFlag height={24} width={32} />
  ) : (
    <RuFlag height={24} width={32} />
  );
};

export default Flag;
