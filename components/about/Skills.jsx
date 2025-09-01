import React from "react";

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      colClass: "left",
      title: "Programming Skills",
      progress: [
        {
          id: 1,
          skillName: "React.js / React Native",
          skillValue: "95",
        },
        {
          id: 2,
          skillName: "Node.js / NestJS",
          skillValue: "90",
        },
        {
          id: 3,
          skillName: "AWS & Cloud Architecture",
          skillValue: "88",
        },
        {
          id: 4,
          skillName: "GraphQL / REST APIs",
          skillValue: "85",
        },
        {
          id: 5,
          skillName: "MongoDB / DynamoDB",
          skillValue: "82",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Language Skills",
      progress: [
        {
          id: 1,
          skillName: "Spanish (Native)",
          skillValue: "100",
        },
        {
          id: 2,
          skillName: "English (Professional)",
          skillValue: "90",
        },
      ],
    },
  ];

  return (
    <>
      {skillsContent.map((item) => (
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

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div
                className="progress_inner"
                key={skill.id}
                style={{ marginBottom: 14 }}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 15,
                    marginBottom: 6,
                    color: "#fff",
                  }}
                >
                  <span className="label">{skill?.skillName}</span>
                  <span className="number">{skill?.skillValue}%</span>
                </span>
                <div
                  className="background"
                  style={{
                    width: "100%",
                    height: 8,
                    background: "#E5E7EB",
                    borderRadius: 6,
                  }}
                >
                  <div
                    className="bar_in"
                    style={{
                      width: skill?.skillValue + "%",
                      height: 8,
                      borderRadius: 6,
                      background: "#2563EB",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
