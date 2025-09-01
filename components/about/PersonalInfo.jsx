import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 2,
          name: "Location",
          content: "Bogotá, Colombia",
        },
        {
          id: 3,
          name: "Email",
          content: (
            <>
              <a href="mailto:dgomez.new@gmail.com">dgomez.new@gmail.com</a>
            </>
          ),
        },
        {
          id: 4,
          name: "Phone",
          content: (
            <>
              <a href="tel:+573103694621">+57 310 369 4621</a>
            </>
          ),
        },
        {
          id: 5,
          name: "LinkedIn",
          content: (
            <>
              <a
                href="https://www.linkedin.com/in/tokio-alexander-gomez-ordo%C3%B1ez-055b201aa/"
                target="_blank"
                rel="noreferrer"
              >
                tokio-alexander-gomez
              </a>
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "Colombian",
        },
        {
          id: 2,
          name: "Study",
          content: "Universidad Sergio Arboleda",
        },
        {
          id: 3,
          name: "Degree",
          content: "Systems Engineering",
        },
        {
          id: 4,
          name: "Focus",
          content: "Technology Leadership, Cloud Architecture, Product Strategy",
        }
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
