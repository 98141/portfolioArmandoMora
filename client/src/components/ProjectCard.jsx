import { Link } from 'react-router-dom';


export default function ProjectCard({ project }){
return (
<article className="card">
<div className="card-body">
<h3 className="card-title">{project.title}</h3>
<p className="card-text">{project.summaryEs}</p>
<div className="chips">
{project.tech?.map(t => <span key={t} className="chip">{t}</span>)}
</div>
<div className="card-actions">
<Link className="btn" to={`/projects/${project.slug}`}>Ver detalle</Link>
{project.links?.repo && <a className="btn ghost" href={project.links.repo} target="_blank" rel="noreferrer">Repo</a>}
</div>
</div>
</article>
);
}