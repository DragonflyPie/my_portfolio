import React, { useRef } from "react";
import Contacts from "../components/Contacts";
import Project from "../components/projects/Project";
import TopBar from "../components/TopBar";

export default function Home() {
  const welcomeRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

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
      />
      <div className="h-screen snap-center" ref={welcomeRef}>
        <h1>Hi</h1>
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
      <Project bg="bg-teal-500" />
      <Project bg="bg-emerald-500" />
      <Project bg="bg-blue-500" />
      <Contacts reference={contactsRef} />
    </>
  );
}
