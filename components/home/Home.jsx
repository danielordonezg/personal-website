"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              style={{
                padding: 6,
                borderRadius: "100%",
              }}
            >
              <div
                className="image avatar_img"
                style={{
                  backgroundImage:
                    "url(https://media.licdn.com/dms/image/v2/D4E03AQELlbjEh9xqng/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718814182815?e=1759363200&v=beta&t=Q8YKu7q5tqKq3MPgb8PfCKShKEfiL8fSwGs-HmpI7qY)",
                  borderRadius: "100%",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.18)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          <div className="details">
            <h3
              className="name"
              style={{
                fontSize: 36,
                lineHeight: "42px",
                letterSpacing: "-0.02em",
              }}
            >
              Daniel Alexander Gómez Ordoñez
            </h3>

            <h4 className="typer" style={{ marginTop: 6 }}>
              <ReactTyped
                strings={[
                  "Technology Leader",
                  "Scalable Product Architect",
                  "Full-Stack Engineer",
                  "Cloud Architect (AWS & GCP)",
                  "Google for Startups & Endeavor Alum",
                ]}
                loop
                typeSpeed={80}
                backSpeed={30}
                backDelay={1400}
                smartBackspace
              />
            </h4>

            <p
              className="job"
              style={{
                marginTop: 14,
                fontSize: 16,
                lineHeight: "26px",
                opacity: 0.9,
              }}
            >
              Technology leader based in Bogotá, Colombia. I design and build
              cloud-native, multi-tenant platforms and data-driven products with
              a focus on reliability, performance, and usability. Delivered
              300+ projects across Colombia, Chile, India, China, and the U.S.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 14,
              }}
            >
              <span
                style={{
                  padding: "6px 10px",
                  fontSize: 12,
                  borderRadius: 999,
                  background: "rgba(37,99,235,0.12)",
                  border: "1px solid rgba(37,99,235,0.35)",
                }}
              >
                React • React Native • Node.js
              </span>
              <span
                style={{
                  padding: "6px 10px",
                  fontSize: 12,
                  borderRadius: 999,
                  background: "rgba(37,99,235,0.08)",
                  border: "1px solid rgba(37,99,235,0.28)",
                }}
              >
                AWS • Microservices • CI/CD
              </span>
              <span
                style={{
                  padding: "6px 10px",
                  fontSize: 12,
                  borderRadius: 999,
                  background: "rgba(37,99,235,0.05)",
                  border: "1px solid rgba(37,99,235,0.22)",
                }}
              >
                Product Strategy • Team Leadership
              </span>
            </div>

            <div style={{ marginTop: 18 }}>
              <Social />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
