import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2012 - 2017",
          institute: "Universidad Sergio Arboleda",
          degree: "Systems Engineering",
        },
        {
          id: 2,
          year: "2020",
          institute: "Cisco Networking Academy",
          degree: "Cybersecurity Essentials",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2023 - Present",
          institute: "Coally",
          degree: "Chief Technology Officer",
        },
        {
          id: 2,
          year: "2023",
          institute: "Blossom",
          degree: "Senior Mobile Application Developer",
        },
        {
          id: 3,
          year: "2022 - 2023",
          institute: "HelloBUILD",
          degree: "Senior Mobile Application Developer",
        },
        {
          id: 4,
          year: "2022",
          institute: "Scrummers",
          degree: "Backend Developer (Crypto Solutions)",
        },
        {
          id: 5,
          year: "2021 - 2022",
          institute: "Coally",
          degree: "Tech Lead",
        },
        {
          id: 6,
          year: "2020 - 2021",
          institute: "Walk n Travel / Desarrollos WNT",
          degree: "Software & Machine Learning Developer",
        },
        {
          id: 7,
          year: "2016 - 2019",
          institute: "TECOPSA",
          degree: "Web Master",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
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
          <div className="tokyo_tm_resume_list">
            <ul style={{ lineHeight: "28px" }}>
              {item?.resume?.map((value) => (
                <li key={value.id} style={{ marginBottom: 12 }}>
                  <div
                    className="list_inner"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px 14px",
                      border: "1px solid #E5E7EB",
                      borderRadius: 6,
                      background: "#F9FAFB",
                    }}
                  >
                    <div
                      className="time"
                      style={{ fontSize: 13, color: "#6B7280", marginBottom: 2 }}
                    >
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3 style={{ fontSize: 16, margin: "2px 0", color: "#111827" }}>
                        {value.institute}
                      </h3>
                      <span style={{ fontSize: 14, color: "#374151" }}>
                        {value.degree}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
