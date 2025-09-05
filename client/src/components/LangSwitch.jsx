import { useTranslation } from 'react-i18next';


export default function LangSwitch(){
const { i18n } = useTranslation();
const toggle = () => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
return (
<button className="btn" onClick={toggle} aria-label="Change language">
{i18n.language.toUpperCase()}
</button>
);
}