import { useEffect, useState } from 'react';
import { api } from '../api';


export default function Services(){
const [items, setItems] = useState([]);
useEffect(()=>{ api.get('/api/services').then(r=>setItems(r.data)); },[]);
return (
<section className="section">
<h2>Servicios</h2>
<div className="grid">
{items.map(s => (
<article key={s._id} className="card">
<div className="card-body">
<h3 className="card-title">{s.name}</h3>
<p className="card-text">{s.descEs}</p>
<ul className="list">
{s.bulletsEs?.map((b,i)=> <li key={i}>{b}</li>)}
</ul>
</div>
</article>
))}
</div>
</section>
);
}