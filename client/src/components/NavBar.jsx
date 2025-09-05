import { Link, NavLink } from 'react-router-dom';
import LangSwitch from './LangSwitch';
import DarkModeToggle from './DarkModeToggle';

import logo from '../assets/sin_fondo.png';

export default function NavBar(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <img src={logo} alt="Logo securiity MBT" />
        <Link to="/" className="brand">{`<AM/>`}</Link>
        <nav className="menu">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/services">Servicios</NavLink>
          <NavLink to="/about">Sobre mi</NavLink>
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
