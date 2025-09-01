import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/1.jpg",
    name: "Daniel Alexander Gómez Ordoñez",
    designation: "CTO | Tech Lead | Cloud Architect",
    text: (
      <>
        <p>
          Hi, I’m Daniel, a technology leader passionate about building scalable
          platforms that transform access to employment, education, and
          professional growth. As CTO at Coally, I’ve led the creation of a
          multi-tenant platform that connects <strong>1M+ graduates</strong>
          across Latin America to opportunities that matter.
        </p>
        <p>
          With a background in Systems Engineering and hands-on expertise in
          React.js, React Native, Node.js, AWS, and microservices, I combine
          engineering depth with strategic leadership. I thrive on scaling
          products from zero to global reach, mentoring cross-functional teams,
          and delivering solutions with measurable impact.
        </p>
        <p>
          Recognized as a{" "}
          <strong>Google for Startups & EndeavorLAB alumnus</strong>, I bring
          global startup experience, cloud expertise, and a purpose-driven
          approach to technology that opens doors and creates opportunities.
        </p>
      </>
    ),
  };

  return (
    <>
      {/* <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div> */}
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
