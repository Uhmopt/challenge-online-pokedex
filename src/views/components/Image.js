import React from "react";
import defaultImage from "assets/default.png";
import { APP_NAME, SERVER_BASE } from "config/appConfig";

export default function Image({ src = "", alt = APP_NAME, ...props }) {
  const isInternal =
    !String(src).includes("http://") && !String(src).includes("https://");

  return (
    <img
      src={src ? (isInternal ? `${SERVER_BASE}${src}` : src) : defaultImage}
      alt={alt}
      {...props}
    />
  );
}
