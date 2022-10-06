import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import badge from "./../../assets/icons/badge.svg";
import modernHouse from "./../../assets/icons/modern-house.svg";
import savings from "./../../assets/icons/savings.svg";
import rating from "./../../assets/icons/rating.svg";
import stars from "./../../assets/icons/stars.svg";

import "./Advantages.scss";

function Advantages() {
  const items = [
    {
      icon: badge,
      alt: "",
      title: "Lifetime warranty with 100% no-clog guarantee",
      starsSource: "",
    },
    {
      icon: modernHouse,
      alt: "",
      title: "Fits most homes",
      starsSource: "",
    },
    {
      icon: savings,
      alt: "",
      title: "Installs over existing gutters saving you thousands",
      starsSource: "",
    },
    {
      icon: rating,
      alt: "",
      title: "Сustomer rating",
      starsSource: stars,
    },
  ];

  return (
    <section className="advantages">
      <Container className="custom_container">
        <Row>
          {items.map((item, index) => (
            <Col md key={index}>
              <div className="advantages__item">
                <div className="advantages__icon">
                  <img src={item.icon} alt={item.alt} />
                </div>
                <div className="advantages__info">
                  {item.starsSource !== "" && (
                    <div>
                      <img src={item.starsSource} alt="rating" />
                    </div>
                  )}
                  {item.title}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Advantages;
