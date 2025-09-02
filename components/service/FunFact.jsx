"use client";
import React from "react";

const FunFact = () => {
  const funFactContent = [
    {
      id: 1,
      number: "300+",
      meta: "Projects Delivered",
    },
    {
      id: 2,
      number: "10+",
      meta: "Years of Experience",
    },
    {
      id: 3,
      number: "5",
      meta: "Countries with Professional Impact",
    },
    {
      id: 4,
      number: "99.9%",
      meta: "Cloud Platform Uptime Achieved",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <ul style={styles.grid}>
          {funFactContent.map((item) => (
            <li key={item.id} style={styles.item}>
              <div style={styles.card}>
                <h3 style={styles.number}>{item.number}</h3>
                <span style={styles.meta}>{item.meta}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "32px 20px 40px",
  },
  container: { width: "min(1120px, 100%)" },
  title: {
    fontSize: 22,
    fontWeight: 800,
    color: "#fff",
    marginBottom: 18,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: { display: "flex" },
  card: {
    flex: 1,
    borderRadius: 16,
    padding: "20px 16px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    minWidth: 200,
    alignItems: "center",
    gap: 6,
  },
  number: {
    fontSize: 26,
    fontWeight: 800,
    color: "#fff",
    margin: 0,
  },
  meta: {
    fontSize: 14,
    color: "rgba(229,231,235,0.85)",
  },
};

export default FunFact;
