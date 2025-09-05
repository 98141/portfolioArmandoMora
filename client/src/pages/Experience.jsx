import { useEffect, useState } from 'react';
import { api } from '../api';
import useReveal from '../hooks/useReveal';

export default function Experience(){
  const [items, setItems] = useState([]);
  useReveal([items.length]);

  useEffect(()=>{ api.get('/api/experience').then(r=>setItems(r.data)).catch(()=>setItems([])); },[]);

  return (
    <section className="section reveal">
      <h2>Experiencia</h2>
      {items.length === 0 && <p className="muted">Sin registros aún.</p>}
      <div className="timeline">
        {items.map((e)=>(
          <div key={e._id} className="tl-item reveal">
            <div className="tl-dot" />
            <div className="tl-card">
              <h3>{e.role} · <span className="muted">{e.company}</span></h3>
              <p className="muted">
                {new Date(e.start).toLocaleDateString()} — {e.end ? new Date(e.end).toLocaleDateString() : 'Actual'}
              </p>
              <ul>
                {(e.achievementsEs || []).map((a,i)=><li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
