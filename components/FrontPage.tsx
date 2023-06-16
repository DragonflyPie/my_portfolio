import { useRouter } from "next/router";
import dictionary from "../intl/dictionary.json";
import Stack from "./Stack";
import Lightbulb from "./Lightbulb";
import Cogs from "./Cogs";
import Moth from "./Moth";

const FrontPage = () => {
  const { locale } = useRouter();
  const lang = locale as "en" | "ru";
  return (
    <div className="flex  min-h-screen flex-col items-start justify-between gap-2 px-3 pb-20 pt-10 md:max-w-3xl md:pt-12">
      <h1 className=" self-center pt-4 italic md:self-start md:py-10 lg:py-20">
        {dictionary.main.heading[lang]}
      </h1>
      <div className="flex flex-col items-center md:flex-row md:gap-10">
        <Lightbulb />
        <section>{dictionary.main.content[0][lang]}</section>
      </div>
      <div className="flex w-full flex-col items-center md:flex-row md:gap-10  ">
        <Cogs />
        <section>{dictionary.main.content[1][lang]}</section>
      </div>
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-end ">
        <Stack />
        <section>{dictionary.main.content[2][lang]}</section>
      </div>
    </div>
  );
};

export default FrontPage;
