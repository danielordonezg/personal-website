"use client";
import React from "react";

const PersonalInfo = () => {
  const left = [
    { id: 1, name: "Location", content: "Bogotá, Colombia" },
    {
      id: 2,
      name: "Email",
      content: (
        <a href="mailto:dgomez.new@gmail.com" style={styles.link}>
          dgomez.new@gmail.com
        </a>
      ),
    },
    {
      id: 3,
      name: "Phone",
      content: (
        <a href="tel:+573103694621" style={styles.link}>
          +57 310 369 4621
        </a>
      ),
    },
    {
      id: 4,
      name: "LinkedIn",
      content: (
        <a
          href="https://www.linkedin.com/in/daniel-alexander-gomez-ordo%C3%B1ez-055b201aa/"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          daniel-alexander-gomez
        </a>
      ),
    },
  ];

  const right = [
    { id: 5, name: "Nationality", content: "Colombian" },
    { id: 6, name: "Study", content: "Universidad Sergio Arboleda" },
    { id: 7, name: "Degree", content: "Systems Engineering" },
    {
      id: 8,
      name: "Focus",
      content: "Technology Leadership, Cloud Architecture, Product Strategy",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h2 style={styles.title}>Personal Info</h2>
        <div style={styles.grid}>
          <ul style={styles.list}>
            {left.map((it) => (
              <li key={it.id} style={styles.item}>
                <span style={styles.label}>{it.name}</span>
                <span style={styles.value}>{it.content}</span>
              </li>
            ))}
          </ul>

          <ul style={styles.list}>
            {right.map((it) => (
              <li key={it.id} style={styles.item}>
                <span style={styles.label}>{it.name}</span>
                <span style={styles.value}>{it.content}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.actions}>
          <a href="#contact" style={styles.primaryBtn}>
            Contact me
          </a>
          <a href="/DanielGomez_CV.pdf" style={styles.secondaryBtn}>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    borderRadius: 22,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 22,
    backdropFilter: "blur(10px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  title: {
    margin: 0,
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: "-0.01em",
    color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 14,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "grid",
    gap: 10,
  },
  item: {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    gap: 12,
    alignItems: "center",
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
  },
  label: {
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: ".08em",
    opacity: 0.75,
  },
  value: {
    fontSize: 14,
    color: "#E5E7EB",
    overflowWrap: "anywhere",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    borderBottom: "1px dashed rgba(255,255,255,0.25)",
  },
  actions: {
    marginTop: 18,
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  primaryBtn: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 12,
    background: "#3b82f6",
    color: "#0b1020",
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.20)",
  },
  secondaryBtn: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 12,
    color: "white",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.22)",
  },
};

// Responsivo simple en línea con el Home
if (typeof window !== "undefined") {
  const applyResponsive = () => {
    const small = window.matchMedia("(max-width: 980px)").matches;
    styles.grid.gridTemplateColumns = small ? "1fr" : "1fr 1fr";
    styles.item.gridTemplateColumns = small ? "120px 1fr" : "140px 1fr";
  };
  applyResponsive();
  window.addEventListener("resize", applyResponsive);
}

export default PersonalInfo;
