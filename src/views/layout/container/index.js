import React from "react";

export default function Container({ children = null }) {
  return (
    <div className="container">
      <div className="container-content">{children}</div>
    </div>
  );
}
