import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "404 || Daniel Gómez - Personal Portfolio",
};

const NotFound = () => {
  return (
    <>
      <div className="not-found-wrapper" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <Link className="navbar-brand" href="/">
            <Image width={140} height={28} src="/img/logo/danielgomez.png" alt="Daniel Gómez Logo" />
          </Link>
        </header>

        <main
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "72px", fontWeight: 700, marginBottom: 12, color: "#2563EB" }}>404</h1>
            <h3 style={{ fontSize: "24px", fontWeight: 600, marginBottom: 8 }}>Page not found</h3>
            <p style={{ fontSize: "16px", color: "#6B7280", marginBottom: 20 }}>
              The page you were looking for could not be found. It might have been moved or deleted.
            </p>
            <Link
              href="/"
              className="ib-button"
              style={{
                padding: "10px 20px",
                borderRadius: 6,
                background: "#2563EB",
                color: "#FFFFFF",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Go to Home
            </Link>
          </div>
        </main>

        <footer
          style={{
            padding: "16px",
            textAlign: "center",
            borderTop: "1px solid #E5E7EB",
            fontSize: "14px",
            color: "#6B7280",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Daniel A. Gómez. All rights reserved. <br />
            Built with Next.js & React.
          </p>
        </footer>
      </div>
    </>
  );
};

export default NotFound;
