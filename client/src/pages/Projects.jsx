import { useEffect, useState } from "react";
import { api } from "../api";

import ProjectCard from "../components/ProjectCard";
import useReveal from "../hooks/useReveal";

export default function Projects({ featuredOnly = false }) {
  const [items, setItems] = useState([]);
  useReveal();
  useEffect(() => {
    const qs = featuredOnly ? "?featured=true" : "";
    api
      .get(`/api/projects${qs}`)
      .then((r) => setItems(r.data))
      .catch(() => setItems([]));
  }, [featuredOnly]);

  return (
    <section className="section reveal">
      <div className="section-head">
        <h2>{featuredOnly ? "Proyectos destacados" : "Proyectos"}</h2>
      </div>
      <div className="grid">
        {items.map((p) => (
          <div key={p._id} className="reveal">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
