import React, { useRef } from "react";
import Contacts from "../components/Contacts";
import Project from "../components/Project";
import NavBar from "../components/NavBar";
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import {
  CloudinaryIcon,
  FirebaseIcon,
  GoogleMapsIcon,
  MongoDBIcon,
  NextIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../components/StackIcons";
import FrontPage from "../components/FrontPage";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {
  const contactsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const { locale } = useRouter();
  const lang = locale as "en" | "ru";

  const handleClick = (elementRef: React.RefObject<HTMLDivElement> | null) => {
    if (elementRef !== null) {
      elementRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Head>
        <title>Vladimir Karasev 👋</title>
      </Head>
      <NavBar
        handleClick={handleClick}
        contactsRef={contactsRef}
        projectsRef={projectsRef}
      />
      <div className="flex flex-col items-center space-y-4 overflow-hidden">
        <FrontPage />
        <div
          className="absolute bottom-5 left-1/2 cursor-pointer"
          onClick={() => handleClick(projectsRef)}
        >
          <ScrollDownIndicator />
        </div>
        <div
          ref={projectsRef}
          className="w-full scroll-m-10 space-y-4 px-2 md:px-4 lg:space-y-8 lg:px-8 "
        >
          <Project
            lang={lang}
            img="/chatGPT.png"
            techIcons={[
              { icon: <ReactIcon />, name: "ReactJS" },
              { icon: <NextIcon />, name: "NextJS" },
              { icon: <TypescriptIcon />, name: "Typescript" },
              { icon: <TailwindIcon />, name: "Tailwind" },
              { icon: <FirebaseIcon />, name: "Firebase" },
            ]}
            title={""}
            description={"chatGPT"}
            github="https://github.com/"
            url="https://vercel.com/"
          />
          <Project
            lang={lang}
            img="/timeJourney.png"
            techIcons={[
              { icon: <ReactIcon />, name: "ReactJS" },
              { icon: <NextIcon />, name: "NextJS" },
              { icon: <TypescriptIcon />, name: "Typescript" },
              { icon: <ReduxIcon />, name: "Redux" },
              { icon: <TailwindIcon />, name: "Tailwind" },
              { icon: <MongoDBIcon />, name: "MongoDB" },
              { icon: <CloudinaryIcon />, name: "Cloudinary" },
              { icon: <GoogleMapsIcon />, name: "GoogleMaps" },
            ]}
            title={""}
            description={"chatGPT"}
            github="https://github.com/"
            url="https://vercel.com/"
          />
        </div>
        <Contacts reference={contactsRef} />
      </div>
      <Footer />
    </div>
  );
}
