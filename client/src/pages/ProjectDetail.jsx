import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../api';

export default function ProjectDetail(){
const { slug } = useParams();
const [p, setP] = useState(null);


useEffect(()=>{ api.get(`/api/projects/${slug}`).then(r=>setP(r.data)); },[slug]);
if(!p) return <section className="section"><p>Cargando…</p></section>


return (
<section className="section">
<h2>{p.title}</h2>
<p className="lead">{p.summaryEs}</p>
{p.securityHighlights?.length > 0 && (
<div className="box">
<strong>Seguridad aplicada:</strong>
<ul>{p.securityHighlights.map((s,i)=><li key={i}>{s}</li>)}</ul>
</div>
)}
<div className="chips">{p.tech?.map(t=> <span key={t} className="chip">{t}</span>)}</div>
</section>
);
}