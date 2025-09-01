"use client";
import Link from "next/link";
import Image from "next/image";
import sidebarData from "../../data/sidebarData";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const router = usePathname();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        className="header"
      >
        <div className="header-inner" style={{ padding: "12px 20px" }}>
          <div className="logo" style={{ fontWeight: 700, fontSize: 18 }}>
            <Link
              className="navbar-brand"
              href="/"
              style={{ color: "#FFFFFF", textDecoration: "none" }}
            >
              Daniel A. Gómez
            </Link>
          </div>
          <div className="my_trigger" onClick={handleClick}>
            <div
              className={
                click
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={click ? "leftpart active" : "leftpart"}
        style={{ background: "#000000" }}
      >
        <div className="leftpart_inner" style={{ padding: "20px" }}>
          <div
            className="personal_info"
            style={{
              padding: "20px 0",
              marginBottom: 20,
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: "#FFFFFF",
                marginBottom: 4,
              }}
            >
              Daniel A. Gómez
            </div>
            <div style={{ fontSize: 14, color: "#9CA3AF" }}>
              Tech Lead • Architect • Engineer
            </div>
          </div>

          <div className="menu">
            <ul>
              {sidebarData.map((item) => (
                <li key={item.id} onClick={handleClick}>
                  <Link
                    className={`${
                      isActiveLink(item.routePath, router) ? "active " : ""
                    }`}
                    href={item.routePath}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 12px",
                      color: "#D1D5DB",
                      textDecoration: "none",
                      borderRadius: 6,
                    }}
                  >
                    <Image
                      width={15}
                      height={15}
                      className="svg"
                      src={item.icon}
                      alt="menu icon"
                    />
                    <span className="menu_content">{item.menuName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: "auto" }}>
            <CopyRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
