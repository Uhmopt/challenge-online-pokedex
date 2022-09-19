import React from "react";

export default function Chip({ label = "" }) {
  return (
    <div className={`chip chip-${String(label ?? "").toLowerCase()}`}>
      {label ?? ""}
    </div>
  );
}
