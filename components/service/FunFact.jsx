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
    <>
      {funFactContent.map((item) => (
        <li key={item.id}>
          <div
            className="list_inner"
            style={{
              padding: "16px",
              borderRadius: 8,
              background: "#F9FAFB",
              border: "1px solid #E5E7EB",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#2563EB",
                marginBottom: 4,
              }}
            >
              {item.number}
            </h3>
            <span style={{ fontSize: 14, color: "#374151" }}>{item.meta}</span>
          </div>
        </li>
      ))}
    </>
  );
};

export default FunFact;
