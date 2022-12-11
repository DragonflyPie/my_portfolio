import Contact from "../components/Contact";
import Project from "../components/projects/Project";

export default function Home() {
  return (
    <>
      <div className="h-screen snap-center">
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
      <Contact />
    </>
  );
}
