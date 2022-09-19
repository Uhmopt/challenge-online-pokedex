import React from "react";
import { APP_NAME } from "../../../constants/strings";

export default function Header() {
  return (
    <div className="header">
      <h1>{APP_NAME}</h1>
    </div>
  );
}
