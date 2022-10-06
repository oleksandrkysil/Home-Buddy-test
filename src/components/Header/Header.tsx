import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "@fontsource/open-sans";
import logo from "./../../assets/homeBuddy.svg";
import nbc from "./../../assets/nbc.svg";

import "./Header.scss";

type HeaderProps = {
  resultRef: any;
};

const Header: React.FunctionComponent<HeaderProps> = ({ resultRef }) => {
  const scrollToAction = () => {
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="header">
      <Container className="header__topBar custom_container">
        <Row>
          <Col className="d-flex justify-content-between align-items-center">
            <a href="/" className="header__logo">
              <img src={logo} alt="logo" />
              <span className="header__logo-info">for homeowners</span>
            </a>
            <nav className="header__nav" onClick={scrollToAction}>
              <div onClick={scrollToAction} className="header__scrollToAction">
                Link to form
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
      <Container className="header__infoBar custom_container">
        <Row>
          <Col md>
            <h1 className="header__title">
              How{" "}
              <mark className="header__titleMark">Over 410,000 Americans</mark>{" "}
              Increased Their Property Value{" "}
              <mark className="header__titleMark">In Under 6 Hours*</mark> With
              This Simple Upgrade.
            </h1>
            <h2 className="header__subTitle">
              Ideal for detached and semi-detached homes with sloped roofs.{" "}
            </h2>
          </Col>
          <Col md>
            <div className="header__picture">
              <a
                href="https://google.com"
                className="header__externalLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                As seen on&nbsp;&nbsp;
                <img src={nbc} alt="nbc" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
