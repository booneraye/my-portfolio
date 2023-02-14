import React from "react";
import { Col, Row } from "shards-react";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";

const Footer = () => {
  return (
    <div className="footer-section">
      <Row>
        <Col md={12} style={{ padding: "2% 0% 0% 2%"}}>
          <a
            href="https://www.facebook.com/booneraye"
            target="_blank"
            style={{ margin: 5 }}
          >
            <Facebook width="30px" height="30px" />
          </a>
          <a
            href="https://www.linkedin.com/in/booneraye/"
            target="_blank"
            style={{ margin: 5 }}
          >
            <LinkedIn width="30px" height="30px" />
          </a>
          <a
            href="https://github.com/booneraye"
            target="_blank"
            style={{ margin: 5 }}
          >
            <GitHub width="30px" height="30px" />
          </a>
          <p>booneraye@gmail.com</p>
          <p>Boone Raye Flores | Portfolio 101 - Brave Digital PH 2023 ©</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
