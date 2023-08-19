import React from "react";
import { Col, Row } from "shards-react";
import { useAppData } from "../context/AppContext";

const MyLink = ({ data }) => {
  const { Logo, link } = data;
  return (
    <a href={link} target="_blank" style={{ margin: 5 }}>
      <Logo width="30px" height="30px" />
    </a>
  );
};

const Footer = () => {
  const { INFO } = useAppData();
  return (
    <div className="footer-section">
      <Row>
        <Col md={12} style={{ padding: "2% 0% 0% 2%" }}>
          {INFO.SOCIALS.map((SOCIAL) => (
            <MyLink data={SOCIAL} />
          ))}
          <p>{INFO.EMAIL_ADDRESS}</p>
          <p>
            {INFO.NAME} | {INFO.PORTFOLIO.NAME} - Brave Digital PH{" "}
            {new Date().getFullYear()} ©
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
