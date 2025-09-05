import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


export default function Hero(){
const { t } = useTranslation();
return (
<section className="hero">
<div className="container hero-inner">
<h1>{t('hero.title')}</h1>
<p className="lead">{t('hero.subtitle')}</p>
<Link to="/projects" className="btn primary">{t('cta.viewProjects')}</Link>
</div>
</section>
);
}