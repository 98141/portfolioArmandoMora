import { useEffect, useState } from 'react';
import { api } from '../api';
import useReveal from '../hooks/useReveal';

export default function Certifications(){
  const [items, setItems] = useState([]);
  useReveal([items.length]);

  useEffect(()=>{ api.get('/api/certifications').then(r=>setItems(r.data)).catch(()=>setItems([])); },[]);

  return (
    <section className="section reveal">
      <h2>Certificaciones</h2>
      {items.length === 0 && <p className="muted">Sin certificaciones aún.</p>}
      <div className="grid">
        {items.map((c)=>(
          <article key={c._id} className="badge reveal">
            <h3>{c.name}</h3>
            <p className="muted">
              {(c.issuer || '—')} · {c.date ? new Date(c.date).getFullYear() : '—'}
            </p>
            {c.credentialUrl && (
              <a className="btn ghost" href={c.credentialUrl} target="_blank" rel="noreferrer">
                Ver credencial
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
