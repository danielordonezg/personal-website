import React from "react";

const CopyRight = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: 14,
        color: "#6B7280",
        padding: "16px 0",
        borderTop: "1px solid #E5E7EB",
        marginTop: 20,
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Daniel A. Gómez <br />
        All rights reserved.
      </p>
    </div>
  );
};

export default CopyRight;
