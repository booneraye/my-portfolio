import React from "react";
import { Col, Row, Button, ButtonGroup } from "shards-react";
import Typewriter from "typewriter-effect";
import Image1 from "../assets/images/1.png";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";
import { ReactComponent as GitHub } from "../assets/icons/github.svg";

const MainCover = () => {
  return (
    <div style={{ margin: 0, display: "block" }} id="home">
      <Row style={{ margin: 0 }}>
        <Col md={7} style={{ padding: "5% 6% 2% 6%" }}>
          <h3>Hello! 👋,</h3>
          <h1>
            I'm{" "}
            <span style={{ color: "#ce2c5a", fontWeight: "600" }}>
              Boone Raye Flores
            </span>
          </h1>
          <h4>
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "Web Developer",
                  "IT Specialist",
                  "Digital Marketer",
                  "SEO Specialist",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
          <p>🚀🚀🚀</p>
          <p>
            I'm a career shifter who previously worked in sales and marketing.
            My responsibilities included social media management, content
            creation, and merchant and partner acquisition. <br />
            <br />
            However, I decided to pursue my passion and dream of becoming a web
            developer in 2020. The transition was difficult but I'm glad to be
            on this path. I'm still learning but I have already accomplished
            some projects that I'm proud of.
            <br />
            <br />
            <strong style={{ fontWeight: "bold" }}>
              I'm dedicated to continuing my growth and development as a web
              developer.
            </strong>
          </p>
          <ButtonGroup>
            <Button
              className="social-links"
              onClick={() =>
                window.open("https://www.facebook.com/booneraye", "_blank")
              }
            >
              <Facebook width="20px" height="20px" />
            </Button>
            <Button
              className="social-links"
              onClick={() =>
                window.open("https://www.linkedin.com/in/booneraye", "_blank")
              }
            >
              <LinkedIn width="20px" height="20px" />
            </Button>
            <Button
              className="social-links"
              onClick={() =>
                window.open("https://github.com/booneraye", "_blank")
              }
            >
              <GitHub width="20px" height="20px" />
            </Button>
          </ButtonGroup>
        </Col>
        <Col md={5}>
          <img src={Image1} className="landing-page-image" />
        </Col>
      </Row>
    </div>
  );
};

export default MainCover;
