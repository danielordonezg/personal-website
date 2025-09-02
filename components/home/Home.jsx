"use client";
import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <section style={styles.section}>
        <div style={styles.decorGrid} />

        <div style={styles.container}>
          <main style={styles.card}>
            <div style={styles.headerRow}>
              <div style={styles.avatarWrap}>
                <div
                  style={{
                    ...styles.avatar,
                    backgroundImage:
                      "url(https://media.licdn.com/dms/image/v2/D4E03AQELlbjEh9xqng/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718814182815?e=1759363200&v=beta&t=Q8YKu7q5tqKq3MPgb8PfCKShKEfiL8fSwGs-HmpI7qY)",
                  }}
                />
              </div>

              <div style={styles.titleArea}>
                <h1 style={styles.name}>Daniel Alexander Gómez Ordoñez</h1>
                <div style={styles.role}>
                  <ReactTyped
                    strings={[
                      "Scalable Product Architect",
                      "Technology Leader",
                      "Full-Stack Engineer",
                      "Cloud Architect (AWS & GCP)",
                    ]}
                    loop
                    typeSpeed={80}
                    backSpeed={30}
                    backDelay={1400}
                    smartBackspace
                  />
                </div>
              </div>
            </div>

            <p style={styles.summary}>
              Technology leader based in Bogotá, COL. I design and build cloud-native,
              multi-tenant platforms and data-driven products with a focus on reliability,
              performance and usability. Delivered 300+ projects across Colombia, Chile,
              India, China and the U.S.
            </p>

            <div style={styles.badgesRow}>
              <span style={{ ...styles.badge, ...styles.badgeStrong }}>
                React • React Native • Node.js
              </span>
              <span style={{ ...styles.badge, ...styles.badgeMid }}>
                AWS • Microservices • CI/CD
              </span>
              <span style={{ ...styles.badge, ...styles.badgeLight }}>
                Product Strategy • Team Leadership
              </span>
            </div>

            <div style={styles.metaRow}>
              <div style={styles.metaItem}>
                <div style={styles.metaNum}>CTO</div>
                <div style={styles.metaLabel}>Coally SAS</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaNum}>10+ yrs</div>
                <div style={styles.metaLabel}>Experience</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaNum}>300+</div>
                <div style={styles.metaLabel}>Projects</div>
              </div>
              <div style={styles.metaItem}>
                <div style={styles.metaNum}>800k+</div>
                <div style={styles.metaLabel}>Users served</div>
              </div>
            </div>

            <div style={styles.divider} />

            <section style={styles.blocksGrid}>
              <div style={styles.block}>
                <h3 style={styles.blockTitle}>Now / Building</h3>
                <ul style={styles.list}>
                  <li>Multi-tenant talent & alumni platform at national scale.</li>
                  <li>AI modules for matching, interview prep & viability scoring.</li>
                  <li>Observability & reliability program (SLOs, cost control).</li>
                </ul>
              </div>

              <div style={styles.block}>
                <h3 style={styles.blockTitle}>Highlights</h3>
                <ul style={styles.list}>
                  <li>Scaled Coally to <b>800k+ users</b> across universities.</li>
                  <li>Designed microservices on AWS with automated CI/CD.</li>
                  <li>Delivered projects in <b>5 countries</b> with remote teams.</li>
                </ul>
              </div>

              <div style={styles.block}>
                <h3 style={styles.blockTitle}>Focus Areas</h3>
                <div style={styles.chips}>
                  {[
                    "Multi-tenant SaaS",
                    "AI/ML for employability",
                    "Event-driven microservices",
                    "Data products & analytics",
                    "Security & compliance",
                  ].map((c) => (
                    <span key={c} style={styles.chip}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section style={styles.stackGrid}>
              <div style={styles.stackCol}>
                <h4 style={styles.stackTitle}>Frontend</h4>
                <p style={styles.stackText}>React, Next.js, React Native, MUI, Chakra UI</p>
              </div>
              <div style={styles.stackCol}>
                <h4 style={styles.stackTitle}>Backend</h4>
                <p style={styles.stackText}>Node.js, NestJS, Express, MongoDB/DynamoDB</p>
              </div>
              <div style={styles.stackCol}>
                <h4 style={styles.stackTitle}>Cloud & DevOps</h4>
                <p style={styles.stackText}>AWS (EC2, S3, SES, Cognito, SQS), Vercel, Railway, CI/CD</p>
              </div>
              <div style={styles.stackCol}>
                <h4 style={styles.stackTitle}>Data & AI</h4>
                <p style={styles.stackText}>OpenAI, embeddings, vector search, analytics pipelines</p>
              </div>
            </section>

            <section style={styles.timeline}>
              <h3 style={styles.blockTitle}>Mini Timeline</h3>
              <div style={styles.timelineRow}>
                <div style={styles.dot} />
                <div style={styles.timelineItem}>
                  <div style={styles.timelineTitle}>CTO — Coally</div>
                  <div style={styles.timelineMeta}>2022 — Present</div>
                  <div style={styles.timelineDesc}>
                    Lead product & engineering for a multi-university ecosystem.
                  </div>
                </div>
              </div>
              <div style={styles.timelineRow}>
                <div style={styles.dot} />
                <div style={styles.timelineItem}>
                  <div style={styles.timelineTitle}>Tech Lead — Blossom</div>
                  <div style={styles.timelineMeta}>2019 — 2022</div>
                  <div style={styles.timelineDesc}>
                    Built mobile app from scratch; adopted by 10+ credit unions.
                  </div>
                </div>
              </div>
            </section>

            <div style={styles.availability}>
              <div>Available for advisory and selective collaborations.</div>
              <div style={styles.ctaRow}>
                <a href="#contact" style={styles.primaryCta}>
                  Let’s build together
                </a>
                <a href="/DanielGomez_CV.pdf" style={styles.secondaryCta}>
                  Download CV
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

const styles = {
  section: {
    position: "relative",
    width: "100%",
    padding: "56px 20px",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  },
  container: {
    width: "min(1120px, 100%)",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    position: "relative",
    borderRadius: 22,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    border: "1px solid rgba(255,255,255,0.10)",
    padding: 26,
    backdropFilter: "blur(10px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
  },
  headerRow: {
    display: "grid",
    gridTemplateColumns: "92px 1fr",
    gap: 16,
    alignItems: "center",
  },
  avatarWrap: {
    position: "relative",
    width: 92,
    height: 92,
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
  },
  avatar: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  titleArea: { display: "flex", flexDirection: "column" },
  name: {
    margin: 0,
    fontSize: 32,
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    color: "#fff",
  },
  role: { marginTop: 6, fontSize: 15, opacity: 0.9 },
  summary: { marginTop: 14, fontSize: 16, lineHeight: "26px", opacity: 0.9 },
  badgesRow: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 },
  badge: { padding: "6px 10px", fontSize: 12, borderRadius: 999, border: "1px solid" },
  badgeStrong: { background: "rgba(99,102,241,0.12)", borderColor: "rgba(99,102,241,0.28)" },
  badgeMid: { background: "rgba(56,189,248,0.10)", borderColor: "rgba(56,189,248,0.26)" },
  badgeLight: { background: "rgba(34,197,94,0.10)", borderColor: "rgba(34,197,94,0.26)" },

  metaRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 10,
    marginTop: 16,
  },
  metaItem: {
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    textAlign: "center",
  },
  metaNum: { fontSize: 18, fontWeight: 700 },
  metaLabel: { fontSize: 12, opacity: 0.8, marginTop: 2 },

  divider: {
    height: 1,
    background: "rgba(255,255,255,0.08)",
    margin: "20px 0",
  },

  blocksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 14,
  },
  block: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 16,
    padding: 14,
  },
  blockTitle: { margin: 0, fontSize: 14, fontWeight: 700, opacity: 0.95 },
  list: {
    margin: "8px 0 0 16px",
    padding: 0,
    lineHeight: "24px",
    fontSize: 14,
    opacity: 0.9,
  },
  chips: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 },
  chip: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  stackGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 12,
    marginTop: 16,
  },
  stackCol: {
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 14,
    padding: 12,
  },
  stackTitle: { margin: 0, fontSize: 13, fontWeight: 700, opacity: 0.95 },
  stackText: { margin: "6px 0 0", fontSize: 13, opacity: 0.9 },

  timeline: { marginTop: 18 },
  timelineRow: {
    display: "grid",
    gridTemplateColumns: "12px 1fr",
    gap: 12,
    alignItems: "start",
    marginTop: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.8)",
    marginTop: 6,
  },
  timelineItem: {
    borderLeft: "1px solid rgba(255,255,255,0.15)",
    paddingLeft: 12,
  },
  timelineTitle: { fontSize: 14, fontWeight: 700 },
  timelineMeta: { fontSize: 12, opacity: 0.8, marginTop: 2 },
  timelineDesc: { fontSize: 13, opacity: 0.9, marginTop: 4 },

  availability: {
    marginTop: 18,
    padding: 14,
    borderRadius: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  ctaRow: { display: "flex", gap: 10, flexWrap: "wrap" },
  primaryCta: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 12,
    background: "#3b82f6",
    color: "#0b1020",
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.20)",
  },
  secondaryCta: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 12,
    color: "white",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.22)",
  },

  decorGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
    backgroundSize: "28px 28px, 28px 28px",
    maskImage:
      "radial-gradient(60% 60% at 60% 40%, rgba(0,0,0,1), rgba(0,0,0,0))",
    pointerEvents: "none",
  },
};

// Responsivo simple
if (typeof window !== "undefined") {
  const applyResponsive = () => {
    const small = window.matchMedia("(max-width: 980px)").matches;
    styles.headerRow.gridTemplateColumns = small ? "72px 1fr" : "92px 1fr";
    styles.avatarWrap.width = small ? 72 : 92;
    styles.avatarWrap.height = small ? 72 : 92;
    styles.name.fontSize = small ? 26 : 32;
    styles.blocksGrid.gridTemplateColumns = small ? "1fr" : "repeat(3, 1fr)";
    styles.stackGrid.gridTemplateColumns = small ? "1fr 1fr" : "repeat(4, 1fr)";
    styles.container.width = small ? "min(960px, 100%)" : "min(1120px, 100%)";
  };
  applyResponsive();
  window.addEventListener("resize", applyResponsive);
}

export default Home;
