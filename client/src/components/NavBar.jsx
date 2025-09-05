import { Link, NavLink } from 'react-router-dom';
import LangSwitch from './LangSwitch';


export default function NavBar(){
return (
<header className="nav">
<div className="container nav-inner">
<Link to="/" className="brand">{`<AM/>`}</Link>
<nav className="menu">
<NavLink to="/" end>Inicio</NavLink>
<NavLink to="/projects">Proyectos</NavLink>
<NavLink to="/services">Servicios</NavLink>
<NavLink to="/about">Sobre mí</NavLink>
<NavLink to="/contact">Contacto</NavLink>
</nav>
<LangSwitch/>
</div>
</header>
);
}