"use client";
import React, { useState } from "react";
import Modal from "react-modal";

const servicesData = [
  {
    id: 1,
    no: "01",
    title: "Scalable Product Architecture",
    text: "Arquitecturas multi-tenant, modulares y resilientes en AWS/GCP.",
    largeTitle: "Arquitectura de Productos Escalables",
    descriptions: (
      <>
        Diseño dominios claros, límites de contexto y contratos entre servicios.
        Orquesto capacidades transversales (auth, eventos, storage, observabilidad)
        y defino patrones (saga/outbox, idempotencia, caché, colas) para
        escalar sin romper la experiencia.
      </>
    ),
  },
  {
    id: 2,
    no: "02",
    title: "Cloud & DevOps Leadership",
    text: "CI/CD, seguridad, monitoreo y costo-eficiencia desde el día 1.",
    largeTitle: "Liderazgo en Cloud & DevOps",
    descriptions: (
      <>
        Pipelines con GitHub Actions, despliegues canary, IaC, SLOs y alertas.
        Seguridad con IAM, MFA, secretos, VPN site-to-site. Métricas accionables
        (logs, traces) para detectar y corregir antes del usuario.
      </>
    ),
  },
  {
    id: 3,
    no: "03",
    title: "Data & AI Products",
    text: "De datos a decisiones: analítica, embeddings y modelos aplicados.",
    largeTitle: "Productos de Datos e IA",
    descriptions: (
      <>
        Recomendadores, scoring de viabilidad y búsqueda semántica.
        Pipelines de features, vector stores y prompts evaluables para
        resultados consistentes y medibles.
      </>
    ),
  },
  {
    id: 4,
    no: "04",
    title: "Team & Product Leadership",
    text: "Ejecución con foco en impacto: roadmap, prioridades y calidad.",
    largeTitle: "Liderazgo Técnico y de Producto",
    descriptions: (
      <>
        Alineo visión y ejecución: definición de objetivos, discovery con
        stakeholders, estándares de código, PRs sanos y releases predecibles.
      </>
    ),
  },
  {
    id: 5,
    no: "05",
    title: "Frontend & Mobile",
    text: "Experiencias modernas en React, Next.js y React Native.",
    largeTitle: "Frontend & Mobile",
    descriptions: (
      <>
        Diseño de UI performante y accesible, design systems, SSR/ISR,
        manejo de estado y optimización de render para apps fluidas.
      </>
    ),
  },
  {
    id: 6,
    no: "06",
    title: "APIs & Integraciones",
    text: "Integraciones robustas con terceros y contratos mantenibles.",
    largeTitle: "APIs & Integraciones",
    descriptions: (
      <>
        REST/GraphQL, webhooks confiables, versionado y documentación clara
        (OpenAPI). Retries, DLQ y backoff para resiliencia real en producción.
      </>
    ),
  },
];

const Services = () => {
  const [singleData, setSingleData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (id) => {
    const found = servicesData.find((s) => s.id === id);
    setSingleData(found);
    setIsOpen(true);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        <ul style={styles.grid}>
          {servicesData.map((item) => (
            <li key={item.id} style={styles.item}>
              <article
                style={styles.card}
                onClick={() => openModal(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(item.id)}
              >
                <div style={styles.cardTop}>
                  <span style={styles.pill}>{item.no}</span>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.text}>{item.text}</p>
                </div>
                <div style={styles.cardFooter}>
                  <span style={styles.readMore}>Read More →</span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
      >
        <div style={styles.modalBox}>
          <button style={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close">
            ✕
          </button>
          <h3 style={styles.modalTitle}>{singleData?.largeTitle}</h3>
          <div style={styles.modalDesc}>{singleData?.descriptions}</div>
        </div>
      </Modal>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "24px 20px 40px",
  },
  container: { width: "min(1120px, 100%)" },

  header: { marginBottom: 12 },
  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "-0.01em",
  },
  subtitle: { marginTop: 6, fontSize: 14, opacity: 0.8 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 5,
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: { display: "flex" },
  card: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 26px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 160,
    minWidth: 300,
    cursor: "pointer",
    transition: "transform .12s ease, border-color .12s ease, background .12s ease",
  },
  cardTop: { display: "grid", gap: 8 },
  pill: {
    alignSelf: "start",
    padding: "4px 8px",
    fontSize: 12,
    borderRadius: 999,
    color: "#3b82f6",
    background: "rgba(59,130,246,0.12)",
    border: "1px solid rgba(59,130,246,0.25)",
  },
  cardTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "-0.01em",
  },
  text: { margin: 0, fontSize: 14, opacity: 0.88, lineHeight: "22px" },
  cardFooter: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  readMore: {
    fontSize: 13,
    fontWeight: 600,
    color: "#3b82f6",
  },

  // Modal
  modalBox: {
    borderRadius: 20,
    padding: 22,
    background: "rgba(0,0,0,0.92)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#fff",
    maxWidth: 640,
    margin: "0 auto",
  },
  closeBtn: {
    background: "transparent",
    border: 0,
    color: "#fff",
    fontSize: 20,
    float: "right",
    cursor: "pointer",
  },
  modalTitle: { fontSize: 20, fontWeight: 800, margin: "6px 0 12px" },
  modalDesc: { fontSize: 15, lineHeight: "24px", opacity: 0.92 },
};

// Responsivo en línea con Home (sin listeners globales)
if (typeof window !== "undefined") {
  const applyResponsive = () => {
    const md = window.matchMedia("(max-width: 1000px)").matches;
    const sm = window.matchMedia("(max-width: 640px)").matches;
    styles.grid.gridTemplateColumns = sm
      ? "1fr"
      : md
      ? "1fr 1fr"
      : "repeat(3, minmax(0, 1fr))";
    styles.card.minHeight = sm ? 150 : 160;
  };
  applyResponsive();
  window.addEventListener("resize", applyResponsive);
}

export default Services;
