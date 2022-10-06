import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "./../../assets/homeBuddy.svg";
import "./Footer.scss";

function Footer() {
  const menu = [
    { item: "Terms of Use" },
    { item: "Privacy Policy" },
    { item: "Cookie Policy" },
    { item: "Do Not Sell My Personal Information" },
    { item: "Contact us" },
  ];
  return (
    <footer className="footer">
      <Container className="custom_container">
        <Row>
          <Col>
            <div className="footer__logo">
              <a href="/" className="footer__homeLink">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <nav className="footer__nav">
              {menu.map((el, index) => (
                <a href="/" className="footer__item" key={index}>
                  {el.item}
                </a>
              ))}
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
