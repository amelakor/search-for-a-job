import React from "react";
import mainLogo from "../assets/images/main-logo.png";
import { Container } from "react-bootstrap";

const Menu = () => {
  const mainCont = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <Container style={mainCont}>
      <img src={mainLogo} alt="Logo" />
    </Container>
  );
};

export default Menu;
