export default function Footer(){
return (
<footer className="footer">
<div className="container footer-inner">
<span>© {new Date().getFullYear()} Tu Nombre</span>
<a href="https://github.com/tuuser" target="_blank" rel="noreferrer">GitHub</a>
<a href="https://www.linkedin.com/in/tuuser" target="_blank" rel="noreferrer">LinkedIn</a>
</div>
</footer>
);
}