import React from "react";
import Typewriter from "typewriter-effect";
import Image1 from "../assets/images/1.png";
import SectionContainer from "../components/SectionContainer";
import { Col, Row, Button, ButtonGroup } from "shards-react";
import { useAppData } from "../context/AppContext";

const MyButton = ({ link, Logo }) => {
  return (
    <Button
      className="social-links"
      onClick={() => window.open(link, "_blank")}
    >
      <Logo width="20px" height="20px" />
    </Button>
  );
};

const MainCover = () => {
  const { INFO } = useAppData();
  return (
    <SectionContainer id="home">
      <Row style={{ margin: 0 }}>
        <Col md={7} style={{ padding: "0% 5% 2% 0%" }}>
          <h3>Hello! <span>👋</span>,</h3>
          <h1>
            I'm{" "}
            <span
              style={{
                color: INFO.PORTFOLIO.COLORS.primary,
                fontWeight: "600",
              }}
            >
              {INFO.NAME}
            </span>
          </h1>
          <h4>
            <Typewriter
              options={{
                strings: INFO.ROLES,
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
          <div className="rocket">🚀</div>
          <p>{INFO.INTRODUCTION}</p>
          <ButtonGroup>
            {INFO.SOCIALS.map((SOCIAL) => (
              <MyButton link={SOCIAL.link} Logo={SOCIAL.Logo} />
            ))}
          </ButtonGroup>
        </Col>
        <Col md={5}>
          <img src={Image1} className="landing-page-image" />
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default MainCover;
