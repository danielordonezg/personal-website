import Image from "next/image";
import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        "React.js, React Native, Next.js",
        "Node.js, NestJS, GraphQL",
        "AWS, GCP, Microservices",
        "MongoDB, DynamoDB, MySQL",
        "Machine Learning, Cybersecurity",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        "Scalable Cloud Architectures",
        "AI for Employability & Education",
        "Startup Growth & Product Strategy",
        "Cross-Functional Team Leadership",
        "Tech with Social Impact",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3
              style={{
                fontSize: 22,
                marginBottom: 12,
                borderBottom: "2px solid #2563EB",
                display: "inline-block",
                paddingBottom: 4,
              }}
            >
              {item.title}
            </h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul style={{ lineHeight: "28px" }}>
              {item.content.map((val, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 15,
                      color: "#fff",
                    }}
                  >
                    <Image
                      width={12}
                      height={12}
                      className="svg"
                      src="/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
