import "dotenv/config";
import mongoose from "mongoose";
import Project from "./models/Project.js";
import Service from "./models/Service.js";
import Certification from "./models/Certification.js";

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Project.deleteMany({});
  await Service.deleteMany({});
  await Certification.deleteMany({});

  await Project.insertMany([
    {
      title: "E‑commerce Artesanías (MERN)",
      slug: "ecommerce-artesanias",
      summaryEs:
        "Tienda full stack con autenticación JWT, pasarela de pago y hardening OWASP (rate-limit, CSP, validación).",
      summaryEn:
        "Full‑stack store with JWT auth, payment gateway and OWASP hardening (rate‑limit, CSP, validation).",
      tech: ["React", "Node", "Express", "MongoDB", "JWT"],
      tags: ["fullstack", "security"],
      images: [],
      links: { repo: "https://github.com/tuuser/ecommerce", demo: "" },
      securityHighlights: [
        "Validación de inputs",
        "CSP",
        "Rate limiting",
        "Helmet",
      ],
      featured: true,
    },
    {
      title: "Informe Pentesting Web",
      slug: "pentest-web-demo",
      summaryEs:
        "Evaluación de seguridad sobre app demo; hallazgos y remediaciones priorizadas.",
      summaryEn:
        "Security assessment on demo app; prioritized findings and remediations.",
      tech: ["Burp", "OWASP ZAP", "Node"],
      tags: ["security"],
      links: { repo: "", demo: "" },
      securityHighlights: [
        "XSS reflected",
        "CSRF mitigations",
        "TLS config review",
      ],
      featured: false,
    },
  ]);

  await Service.insertMany([
    {
      name: "Desarrollo Full Stack a medida",
      category: "fullstack",
      descEs: "Aplicaciones web modernas, escalables y seguras.",
      descEn: "Modern, scalable and secure web apps.",
      bulletsEs: ["SPA con React/Angular", "APIs REST", "DevSecOps"],
      bulletsEn: ["SPA with React/Angular", "REST APIs", "DevSecOps"],
    },
    {
      name: "Pentesting & Auditoría",
      category: "security",
      descEs: "Pruebas de penetración y análisis de vulnerabilidades.",
      descEn: "Pen‑testing and vulnerability assessments.",
      bulletsEs: ["OWASP Top 10", "Hardening", "Reportes ejecutivos"],
      bulletsEn: ["OWASP Top 10", "Hardening", "Executive reporting"],
    },
  ]);
})();

console.log("Seed OK");
await mongoose.disconnect(); 
process.exit(0);
