import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';


export default function App(){
return (
<>
<NavBar />
<main className="container">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/projects/:slug" element={<ProjectDetail/>} />
<Route path="/services" element={<Services/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<Footer />
</>
);
}
