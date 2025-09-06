export default function Footer(){
return (
<footer className="footer">
<div className="container footer-inner">
<span>© {new Date().getFullYear()} Armando Mora</span>
<a href="https://github.com/98141/" target="_blank" rel="noreferrer">GitHub</a>
<a href="https://www.linkedin.com/in/mbt/" target="_blank" rel="noreferrer">LinkedIn</a>
</div>
</footer>
);
}