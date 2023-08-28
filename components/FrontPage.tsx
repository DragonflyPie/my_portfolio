import { useRouter } from "next/router";
import dictionary from "../intl/dictionary.json";
import Stack from "./Stack";
import Lightbulb from "./Lightbulb";
import Cogs from "./Cogs";
import Switch from "./Switch";

const FrontPage = () => {
  const { locale } = useRouter();
  const lang = locale as "en" | "ru";
  return (
    <div className="flex  min-h-screen flex-col items-start justify-between gap-2 px-3 pb-20 pt-10 md:max-w-3xl md:pt-12">
      <div className="flex grow items-center">
        <h1 className=" text-lg italic">{dictionary.main.heading[lang]}</h1>
      </div>
      <div className="flex grow flex-col items-center justify-around md:flex-row md:gap-10">
        <Lightbulb />
        <section>{dictionary.main.content[0][lang]}</section>
      </div>
      <div className="flex w-full grow flex-col items-center justify-around md:flex-row md:gap-10  ">
        <Switch />
        <section>{dictionary.main.content[1][lang]}</section>
      </div>
      <div className="flex flex-col items-center justify-around gap-10 md:flex-row md:items-end ">
        <Stack />
        <section>{dictionary.main.content[2][lang]}</section>
      </div>
    </div>
  );
};

export default FrontPage;
