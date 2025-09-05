import { useEffect, useState } from "react";

/**
 * Usa la clase `dark` en <html> para alternar variables CSS.
 * Persiste en localStorage y respeta prefers-color-scheme la 1ª vez.
 */
export default function DarkModeToggle() {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      className="btn"
      onClick={toggle}
      aria-label="Cambiar tema"
      title={theme === "dark" ? "Cambiar a claro" : "Cambiar a oscuro"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
