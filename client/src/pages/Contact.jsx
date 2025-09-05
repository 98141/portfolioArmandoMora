import { useState } from 'react';
import { api } from '../api';


export default function Contact(){
const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
const [status, setStatus] = useState('idle');


const onChange = e => setForm(f=>({ ...f, [e.target.name]: e.target.value }));
const onSubmit = async e => {
e.preventDefault();
setStatus('loading');
try { await api.post('/api/contact', form); setStatus('ok'); setForm({name:'',email:'',subject:'',message:''}); }
catch { setStatus('err'); }
};


return (
<section className="section">
<h2>Contacto</h2>
<form className="form" onSubmit={onSubmit}>
<input name="name" placeholder="Nombre" value={form.name} onChange={onChange} required/>
<input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required/>
<input name="subject" placeholder="Asunto" value={form.subject} onChange={onChange}/>
<textarea name="message" placeholder="Mensaje" rows="6" value={form.message} onChange={onChange} required/>
<button className="btn primary" disabled={status==='loading'}>{status==='loading'?'Enviando…':'Enviar'}</button>
{status==='ok' && <p className="ok">¡Mensaje enviado!</p>}
{status==='err' && <p className="err">Error al enviar, intenta nuevamente.</p>}
</form>
</section>
);
}