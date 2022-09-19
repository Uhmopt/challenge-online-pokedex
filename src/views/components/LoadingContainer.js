import React from "react";
import Loading from "../pages/loading";

export default function LoadingContainer({ isOpen = false, children = null }) {
  return isOpen ? <Loading /> : children;
}
