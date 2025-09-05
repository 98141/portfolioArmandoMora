import { useEffect, useState } from 'react';
import { api } from '../api';
import ProjectCard from '../components/ProjectCard';


export default function Projects({ featuredOnly=false }){
const [items, setItems] = useState([]);
useEffect(() => {
const qs = featuredOnly ? '?featured=true' : '';
api.get(`/api/projects${qs}`).then(r => setItems(r.data)).catch(()=>setItems([]));
}, [featuredOnly]);


return (
<section className="section">
<div className="section-head">
<h2>{featuredOnly ? 'Proyectos destacados' : 'Proyectos'}</h2>
</div>
<div className="grid">
{items.map(p => <ProjectCard key={p._id} project={p} />)}
</div>
</section>
);
}