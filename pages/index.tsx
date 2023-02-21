import React, { useRef } from "react";
import Contacts from "../components/Contacts";
import Project from "../components/Project";
import TopBar from "../components/TopBar";
import { useRouter } from "next/router";
import strings from "../intl/stringsDic.json";
import ScrollAnimation from "../components/ScrollAnimation";
import Logos from "../components/Icons";
import useMediaQuery from "../components/useMediaQuery";

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const mobile = useMediaQuery();
  const { locale } = useRouter();

  const iconSize = mobile ? 64 : 128;

  const lang = locale as "en" | "ru";

  const handleClick = (elementRef: React.RefObject<HTMLDivElement> | null) => {
    if (elementRef !== null) {
      elementRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <TopBar
        onClick={handleClick}
        welcomeRef={welcomeRef}
        contactsRef={contactsRef}
        projectsRef={projectsRef}
      />
      <div className="h-screen p-12" ref={welcomeRef}>
        <h1>{strings.heading[lang]}</h1>
        <section className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
          culpa, fugiat ex, quis quod eveniet facere delectus totam odit ad.
          Quibusdam recusandae similique nisi omnis libero sunt ea? Quod. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem quas ipsam laborum neque voluptatibus repellendus totam
          ipsa, dignissimos velit quia aut quisquam labore. Repellat doloremque
          atque dicta nemo ducimus.
        </section>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
          culpa, fugiat ex, quis quod eveniet facere delectus totam odit ad.
          Quibusdam recusandae similique nisi omnis libero sunt ea? Quod. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem quas ipsam laborum neque voluptatibus repellendus totam
          ipsa, dignissimos velit quia aut quisquam labore. Repellat doloremque
          atque dicta nemo ducimus.
        </section>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
          culpa, fugiat ex, quis quod eveniet facere delectus totam odit ad.
          Quibusdam recusandae similique nisi omnis libero sunt ea? Quod. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          exercitationem quas ipsam laborum neque voluptatibus repellendus totam
          ipsa, dignissimos velit quia aut quisquam labore. Repellat doloremque
          atque dicta nemo ducimus.
        </section>
      </div>

      <ScrollAnimation />

      <div ref={projectsRef}>
        <Project
          techs={[
            <Logos.Next size={iconSize} />,
            <Logos.ReactIcon size={iconSize} />,
            <Logos.Tailwind size={iconSize} />,
          ]}
        />
        <Project />
        <Project />
      </div>
      <Contacts reference={contactsRef} />
    </>
  );
}
