import Hero from "../components/Hero";
import Projects from "./Projects";
import useReveal from "../hooks/useReveal";

export default function Home() {
  useReveal();
  return (
    <>
      ;
      <Hero />
      <Projects featuredOnly />
    </>
  );
}
