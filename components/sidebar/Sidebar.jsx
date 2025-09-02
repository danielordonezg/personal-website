"use client";
import Link from "next/link";
import Image from "next/image";
import sidebarData from "../../data/sidebarData";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((s) => !s);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="header">
        <div
          className="header-inner"
          style={{
            padding: "12px 16px",
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <Link
            className="navbar-brand"
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.01em" }}>
              Daniel A. Gómez
            </span>
            <span style={{ fontSize: 12, opacity: 0.75 }}>
              Tech Lead • Architect • Engineer
            </span>
          </Link>

          <button
            onClick={toggle}
            aria-label="Toggle menu"
            className={open ? "hamburger hamburger--collapse-r is-active" : "hamburger"}
            style={{ background: "transparent", border: 0, cursor: "pointer" }}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </button>
        </div>
      </div>

      <aside
        className={open ? "leftpart active" : "leftpart"}
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.88), rgba(0,0,0,0.90))",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          className="leftpart_inner"
          style={{ padding: 18, height: "100%", display: "flex", flexDirection: "column", gap: 12 }}
        >
          <div
            style={{
              borderRadius: 16,
              padding: 14,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ fontWeight: 800, fontSize: 20, color: "#fff", letterSpacing: "-0.01em" }}>
                Daniel A. Gómez
              </div>
              <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 4 }}>
                Tech Lead • Architect • Engineer
              </div>
            </Link>
          </div>

          <nav style={{ width: "100%" }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
              {sidebarData.map((item) => {
                const active = isActiveLink(item.routePath, pathname);
                return (
                  <li key={item.id} onClick={() => setOpen(false)}>
                    <Link
                      href={item.routePath}
                      aria-current={active ? "page" : undefined}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 12px",
                        textDecoration: "none",
                        color: active ? "#FFFFFF" : "#D1D5DB",
                        borderRadius: 12,
                        background: active
                          ? "rgba(255,255,255,0.06)"
                          : "transparent",
                        border: active
                          ? "1px solid rgba(255,255,255,0.10)"
                          : "1px solid transparent",
                        transition: "background .15s ease, border-color .15s ease",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: active ? "#3b82f6" : "rgba(255,255,255,0.18)",
                        }}
                      />
                      <Image
                        width={16}
                        height={16}
                        className="svg"
                        src={item.icon}
                        alt=""
                        style={{ opacity: active ? 1 : 0.9 }}
                      />
                      <span style={{ fontSize: 14 }}>{item.menuName}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div style={{ marginTop: "auto" }}>
            <div
              style={{
                height: 1,
                background: "rgba(255,255,255,0.08)",
                margin: "12px 0",
              }}
            />
            <CopyRight />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
