import React from "react";
import RuFlag from "../public/flags/ru.svg";
import GbFlag from "../public/flags/gb.svg";

interface FlagProps {
  country: "en" | "ru";
}

const Flag = ({ country }: FlagProps) => {
  return country === "en" ? <GbFlag height={18} /> : <RuFlag height={18} />;
};

export default Flag;
