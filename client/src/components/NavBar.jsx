import { Link, NavLink } from 'react-router-dom';
import LangSwitch from './LangSwitch';
import DarkModeToggle from './DarkModeToggle';

export default function NavBar(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">{`<AM/>`}</Link>
        <nav className="menu">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/experience">Experiencia</NavLink>
          <NavLink to="/certifications">Certificaciones</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </nav>
        <div style={{display:'flex', gap:'.5rem'}}>
          <a className="btn ghost" href="/cv.pdf" download>CV</a>
          <LangSwitch/>
          <DarkModeToggle/>
        </div>
      </div>
    </header>
  );
}
