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
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 20,
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      {honorsContent.map((item) => (
        <div
          key={item.id}
          style={{
            minWidth: 260,
            width: "100%",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: "16px 18px",
              border: "1px solid rgba(148,163,184,0.25)",
              borderRadius: 10,
              background: "#ffffff",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <h4
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#0B1220",
                  margin: 0,
                  lineHeight: "22px",
                  flex: 1,
                  wordBreak: "break-word",
                }}
              >
                {item.title}
              </h4>
              <span
                style={{
                  fontSize: 12,
                  color: "#1E40AF",
                  background: "#EFF6FF",
                  border: "1px solid #DBEAFE",
                  borderRadius: 999,
                  padding: "2px 8px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {item.year}
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#334155",
                lineHeight: "22px",
                margin: 0,
                wordBreak: "break-word",
              }}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Honors;
