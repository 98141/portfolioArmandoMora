import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import LangSwitch from "./LangSwitch";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo_uno.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const closeDrawer = () => setOpen(false);

  const navItems = [
    { to: "/", label: "Inicio", end: true },
    { to: "/projects", label: "Proyectos" },
    { to: "/services", label: "Servicios" },
    { to: "/about", label: "Sobre mi" },
    { to: "/experience", label: "Experiencia" },
    { to: "/certifications", label: "Certificaciones" },
    { to: "/contact", label: "Contacto" },
  ];

  return (
    <header className="sb-navbar">
      <div className="container">
        <div className="sb-wrap" ref={ref}>
          {/* IZQUIERDA: logo + marca */}
          <Link to="/" className="sb-brand">
            <img className="sb-logo" src={logo} alt="Security MBT" />
            <span className="sb-mark">{`<AM/>`}</span>
          </Link>

          {/* CENTRO: menú */}
          <nav className="sb-center" aria-label="Principal">
            {navItems.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                end={it.end}
                className={({ isActive }) =>
                  "sb-link" + (isActive ? " active" : "")
                }
              >
                {it.label}
              </NavLink>
            ))}
          </nav>

          {/* DERECHA: acciones */}
          <div className="sb-right">
            <a className="btn ghost sb-cv" href="/cv.pdf" download>
              CV
            </a>
            <LangSwitch />
            <DarkModeToggle />

            {/* Hamburguesa (móvil) */}
            <button
              type="button"
              className={`sb-burger ${open ? "active" : ""}`}
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer móvil */}
      <aside className={`sb-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="sb-drawer-head">
          <span>Menú</span>
          <button
            type="button"
            className="sb-drawer-close"
            onClick={closeDrawer}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <div className="sb-drawer-body">
          {navItems.map((it) => (
            <NavLink
              key={"m-" + it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                "sb-drawer-link" + (isActive ? " active" : "")
              }
              onClick={closeDrawer}
            >
              {it.label}
            </NavLink>
          ))}

          <div className="sb-drawer-sep" />

          <a className="sb-drawer-link" href="/cv.pdf" onClick={closeDrawer} download>
            Descargar CV
          </a>

          <div className="sb-drawer-inline">
            <LangSwitch />
            <DarkModeToggle />
          </div>
        </div>
      </aside>

      {/* Backdrop */}
      {open && <div className="sb-backdrop" onClick={closeDrawer} aria-hidden />}
    </header>
  );
}
