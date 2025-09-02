"use client";
import React from "react";

const Honors = () => {
  const honorsContent = [
    {
      id: 1,
      title: "Google for Startups Cloud Program",
      year: "2024",
      description:
        "Selected to the global program with cloud credits, mentorship, and technical resources to scale Coally’s multi-tenant platform.",
    },
    {
      id: 2,
      title: "MongoDB for Startups",
      year: "2024",
      description:
        "Admitted to the program, leveraging database credits and guidance for high-scale workloads and performance.",
    },
    {
      id: 3,
      title: "Google for Startups Latin Founders Fund",
      year: "2022",
      description:
        "Recipient of funding and strategic backing to accelerate impact across Latin America.",
    },
    {
      id: 4,
      title: "EndeavorLAB Participant",
      year: "2025",
      description:
        "Selected by Endeavor Miami to join a cohort focused on scaling high-growth ventures through mentorship and investor networks.",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {honorsContent.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.header}>
                <h4 style={styles.cardTitle}>{item.title}</h4>
                <span style={styles.year}>{item.year}</span>
              </div>
              <p style={styles.desc}>{item.description}</p>
            </div>
          ))}
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
    padding: "24px 20px 40px",
  },
  container: { width: "min(1120px, 100%)" },
  title: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    color: "#fff",
    marginBottom: 16,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
  },
  card: {
    borderRadius: 16,
    padding: 18,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    minHeight: 140,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#fff",
    margin: 0,
    flex: 1,
    lineHeight: "22px",
  },
  year: {
    fontSize: 12,
    color: "#3b82f6",
    background: "rgba(59,130,246,0.12)",
    border: "1px solid rgba(59,130,246,0.25)",
    borderRadius: 999,
    padding: "2px 8px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  desc: {
    fontSize: 14,
    color: "rgba(229,231,235,0.9)",
    lineHeight: "22px",
    margin: 0,
  },
};

export default Honors;
