import React from "react";
import Container from "./container";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children = null }) {
  return (
    <div className="app">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
